
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Book, ChevronRight, Search } from 'lucide-react';
import { SD_SUBJECTS, SMP_SUBJECTS, SMA_SUBJECTS } from '../constants';

const MotionButton = motion.button as any;

const Categories: React.FC = () => {
  const { level } = useParams<{ level: string }>();
  const navigate = useNavigate();
  const [search, setSearch] = React.useState('');

  const subjects = level === 'SD' ? SD_SUBJECTS : level === 'SMP' ? SMP_SUBJECTS : SMA_SUBJECTS;
  const filteredSubjects = subjects.filter(s => s.toLowerCase().includes(search.toLowerCase()));

  const handleSelectSubject = (subject: string) => {
    navigate(`/quiz/${level}/${encodeURIComponent(subject)}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-slate-500 mb-2 font-bold text-xs uppercase tracking-widest">
              <Link to="/" className="hover:text-blue-600">Beranda</Link>
              <ChevronRight size={14} />
              <span className="text-slate-900">Kategori {level}</span>
            </div>
            <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">
              Mapel {level} <span className="text-blue-600">Academy Nusantara</span>
            </h1>
          </div>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Cari mata pelajaran..." 
              className="pl-12 pr-6 py-3 bg-white border-2 border-slate-100 rounded-2xl focus:border-blue-500 outline-none w-full md:w-80 shadow-sm transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Subject Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSubjects.map((subject, idx) => (
            <MotionButton
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.01 }}
              key={subject}
              onClick={() => handleSelectSubject(subject)}
              className="group bg-white p-8 rounded-[2.5rem] border-4 border-transparent hover:border-blue-500 shadow-xl hover:shadow-2xl transition-all text-left relative overflow-hidden"
            >
              <div className={`w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all`}>
                <Book size={24} />
              </div>
              <h3 className="font-black text-slate-900 text-xl leading-tight mb-4 uppercase tracking-tight">{subject}</h3>
              <div className="flex items-center text-xs font-black text-blue-600 tracking-widest">
                MULAI KUIS <ChevronRight size={14} className="ml-1" />
              </div>
            </MotionButton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
