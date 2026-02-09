
import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, ChevronRight, ArrowLeft, Brain, School, User, BookOpen, Clock, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SAMPLE_QUESTIONS } from '../constants';
import { Question, QuizState } from '../types';

const MotionDiv = motion.div as any;

const Quiz: React.FC = () => {
  const { level, subject } = useParams<{ level: string, subject: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const isFestival = new URLSearchParams(location.search).get('mode') === 'festival';
  
  const decodedSubject = decodeURIComponent(subject || '');
  const [questions, setQuestions] = React.useState<Question[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [identitySubmitted, setIdentitySubmitted] = React.useState(false);
  
  const [identity, setIdentity] = React.useState({
    name: '',
    school: '',
    grade: ''
  });

  const totalQuestions = isFestival ? 40 : 15;
  const initialTime = isFestival ? 2700 : 900;

  const [state, setState] = React.useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    answers: [],
    timeLeft: initialTime,
    isFinished: false,
    isStarted: false,
  });

  const timerRef = React.useRef<any>(null);

  React.useEffect(() => {
    let pool: Question[] = [];
    
    if (isFestival) {
      // Gabungkan SEMUA mata pelajaran untuk festival
      Object.keys(SAMPLE_QUESTIONS).forEach(key => {
        pool = [...pool, ...SAMPLE_QUESTIONS[key]];
      });
    } else {
      pool = SAMPLE_QUESTIONS[decodedSubject] || SAMPLE_QUESTIONS['default'];
    }

    const shuffled = [...pool].sort(() => 0.5 - Math.random()).slice(0, totalQuestions);
    setQuestions(shuffled);
    setLoading(false);
  }, [decodedSubject, isFestival, totalQuestions]);

  const startQuizAfterIdentity = (e: React.FormEvent) => {
    e.preventDefault();
    setIdentitySubmitted(true);
    setState(prev => ({ ...prev, isStarted: true }));
  };

  React.useEffect(() => {
    if (state.isStarted && !state.isFinished && state.timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setState(prev => ({ ...prev, timeLeft: prev.timeLeft - 1 }));
      }, 1000);
    } else if (state.timeLeft === 0 && !state.isFinished) {
      setState(prev => ({ ...prev, isFinished: true }));
    }

    return () => clearInterval(timerRef.current);
  }, [state.isStarted, state.isFinished, state.timeLeft]);

  const handleAnswer = (optionIndex: number) => {
    const isCorrect = optionIndex === questions[state.currentQuestionIndex].correctAnswer;
    
    setState(prev => {
      const pointPerQuestion = 100 / questions.length;
      const newScore = isCorrect ? prev.score + pointPerQuestion : prev.score;
      const nextIndex = prev.currentQuestionIndex + 1;
      
      if (nextIndex < questions.length) {
        return { ...prev, score: newScore, currentQuestionIndex: nextIndex, answers: [...prev.answers, optionIndex] };
      } else {
        return { ...prev, score: newScore, isFinished: true, answers: [...prev.answers, optionIndex] };
      }
    });

    if (state.currentQuestionIndex === questions.length - 1) {
      confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!identitySubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <MotionDiv initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl max-w-2xl w-full border-t-[12px] border-emerald-500">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">DATA PESERTA</h1>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mt-2">{isFestival ? 'KOMPETISI FESTIVAL NASIONAL' : `Sesi: ${decodedSubject}`}</p>
          </div>

          <form onSubmit={startQuizAfterIdentity} className="space-y-6">
            <input 
              required
              type="text" 
              placeholder="Nama Lengkap..."
              aria-label="Nama Lengkap"
              className="w-full px-8 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 outline-none font-bold"
              value={identity.name}
              onChange={(e) => setIdentity({...identity, name: e.target.value})}
            />
            <div className="grid grid-cols-2 gap-4">
               <input required type="text" placeholder="Asal Sekolah..." aria-label="Asal Sekolah" className="px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 outline-none font-bold" value={identity.school} onChange={(e) => setIdentity({...identity, school: e.target.value})} />
               <input required type="text" placeholder="Kelas..." aria-label="Kelas" className="px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 outline-none font-bold" value={identity.grade} onChange={(e) => setIdentity({...identity, grade: e.target.value})} />
            </div>
            <button type="submit" className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black text-xl uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl">MULAI SEKARANG</button>
          </form>
        </MotionDiv>
      </div>
    );
  }

  if (state.isFinished) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 py-20">
        <MotionDiv initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl max-w-3xl w-full text-center">
          <Trophy size={80} className="text-yellow-500 mx-auto mb-8 animate-bounce" />
          <h2 className="text-4xl font-black text-slate-900 mb-2 uppercase tracking-tight">RAPOR ACADEMY</h2>
          <div className="bg-[#0f172a] rounded-[3.5rem] p-12 mb-10 shadow-2xl relative">
            <p className="text-slate-500 text-xs font-black uppercase tracking-[0.3em] mb-4 text-white">Poin Kompetensi</p>
            <p className="text-9xl font-black text-white">{Math.round(state.score)}</p>
          </div>
          <button onClick={() => navigate('/')} className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black uppercase tracking-widest shadow-xl">Kembali ke Beranda</button>
        </MotionDiv>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-32">
      <div className="bg-white border-b-4 border-slate-100 sticky top-16 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="font-black text-slate-900 text-2xl tracking-tighter uppercase truncate">{isFestival ? 'FESTIVAL NASIONAL' : decodedSubject}</h1>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Progress</p>
              <p className="font-black text-slate-900 text-xs sm:text-base">Soal {state.currentQuestionIndex + 1} / {questions.length}</p>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 bg-[#0f172a] px-4 sm:px-8 py-3 sm:py-4 rounded-2xl text-white">
              <Clock size={24} className="text-emerald-400" />
              <span className="font-black text-2xl tracking-tight">{formatTime(state.timeLeft)}</span>
            </div>
          </div>
        </div>
        <div className="w-full h-1.5 bg-slate-100 overflow-hidden">
          <MotionDiv
            className="h-full bg-emerald-500"
            initial={{ width: 0 }}
            animate={{ width: `${(questions.length > 0 ? (state.currentQuestionIndex / questions.length) * 100 : 0)}%` }}
            transition={{ duration: 0.5 }}
            role="progressbar"
            aria-valuenow={state.currentQuestionIndex}
            aria-valuemin={0}
            aria-valuemax={questions.length}
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-16">
        <MotionDiv key={state.currentQuestionIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border-t-8 border-slate-900">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-[1.2] mb-16 tracking-tight">
            {questions[state.currentQuestionIndex]?.question}
          </h2>
          <div className="grid gap-4">
            {questions[state.currentQuestionIndex]?.options.map((option, idx) => (
              <button key={idx} onClick={() => handleAnswer(idx)} className="w-full text-left p-8 rounded-2xl border-2 border-slate-100 hover:border-blue-500 hover:bg-blue-50 transition-all flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black group-hover:bg-blue-600">{String.fromCharCode(65 + idx)}</div>
                <span className="font-bold text-slate-700 text-xl">{option}</span>
              </button>
            ))}
          </div>
        </MotionDiv>
      </div>
    </div>
  );
};

export default Quiz;
