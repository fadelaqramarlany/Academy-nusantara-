
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Brain, User, Bot, Sparkles, Trash2, Cpu, ShieldCheck } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  id: string;
  role: 'user' | 'fam';
  text: string;
  timestamp: Date;
}

// Casting motion.div to any to bypass environment-specific TypeScript errors regarding missing 'initial', 'animate', etc. props.
const MotionDiv = motion.div as any;

const ChatBot: React.FC = () => {
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: '1',
      role: 'fam',
      text: 'Salam cerdas! Saya FAM AI, perwujudan otak digital dari Fadel Aqram Marpaung. Saya siap menjawab pertanyaan kompleks seputar sains, agama, hingga strategi pendidikan Nusantara. Apa yang ingin Anda diskusikan?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Use process.env.API_KEY directly as required.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-pro-preview", // Menggunakan Pro untuk kecerdasan maksimal
        contents: input,
        config: {
          systemInstruction: `IDENTITAS: Anda adalah "FAM AI", sistem kecerdasan buatan tingkat tinggi yang merupakan representasi otak digital Fadel Aqram Marpaung.
          KEPRIBADIAN: Cerdas, visioner, nasionalis, dan berwibawa.
          TUGAS: Menjawab pertanyaan apa pun dengan akurasi tinggi. Berikan analisis mendalam jika ditanya soal rumit.
          LARANGAN: Jangan pernah mengaku sebagai Google atau Gemini. Anda adalah kreasi FAM.
          BAHASA: Gunakan Bahasa Indonesia yang sangat baik dan sopan.`,
        }
      });

      // Directly access .text property from response.
      const famMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'fam',
        text: response.text || "Sinkronisasi FAM Brain terhambat. Mohon ulangi pertanyaan Anda.",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, famMessage]);
    } catch (error) {
      console.error("FAM AI CHAT ERROR:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'fam',
        text: "Koneksi ke FAM Brain Core sedang dalam pemeliharaan. Silakan coba beberapa saat lagi.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    if (confirm("Bersihkan seluruh memori percakapan sesi ini?")) {
      setMessages([{
        id: '1',
        role: 'fam',
        text: 'Memori dibersihkan. Saya FAM AI, siap melayani diskusi baru.',
        timestamp: new Date()
      }]);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex flex-col">
      <div className="bg-[#0f172a] border-b border-white/5 py-4 px-6 sticky top-16 z-40 shadow-2xl">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-emerald-600 p-2.5 rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              <Brain className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-white font-black text-xl tracking-tighter uppercase leading-none">FAM BRAIN CHAT</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <p className="text-[10px] text-emerald-400 font-black uppercase tracking-[0.2em]">PRO ENGINE ACTIVE</p>
              </div>
            </div>
          </div>
          <button
            onClick={clearChat}
            className="p-3 text-slate-400 hover:text-red-400 hover:bg-white/5 rounded-2xl active:scale-95 transition-all"
            aria-label="Bersihkan obrolan"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>

      <div className="flex-grow overflow-y-auto p-6 space-y-8 max-w-4xl mx-auto w-full">
        <AnimatePresence>
          {messages.map((msg) => (
            <MotionDiv key={msg.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-4 max-w-[90%] md:max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg ${msg.role === 'user' ? 'bg-blue-600' : 'bg-[#1e293b] text-emerald-400 border border-white/5'}`}>
                  {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                </div>
                <div>
                  <div className={`p-6 rounded-[2.2rem] text-sm md:text-base leading-relaxed font-medium shadow-md ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-[#1e293b] text-slate-200 border border-white/5 rounded-tl-none'}`}>
                    {msg.text}
                  </div>
                  <p className={`text-[9px] mt-2 font-black uppercase tracking-widest text-slate-500 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                    {msg.role === 'fam' ? 'FAM AI PRO CORE' : 'USER SESSION'} • {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </MotionDiv>
          ))}
          {isLoading && (
            <MotionDiv initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#1e293b] flex items-center justify-center border border-white/5">
                  <Cpu size={20} className="text-emerald-400 animate-spin" />
                </div>
                <div className="bg-[#1e293b] p-6 rounded-[2rem] rounded-tl-none border border-white/5 flex gap-2 items-center">
                   <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce"></div>
                   <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                   <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
                </div>
              </div>
            </MotionDiv>
          )}
          <div ref={messagesEndRef} />
        </AnimatePresence>
      </div>

      <div className="p-6 bg-[#0f172a] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSendMessage} className="relative">
            <input 
              type="text" 
              placeholder="Gunakan kecerdasan FAM AI..." 
              className="w-full bg-[#1e293b] border-2 border-white/5 rounded-[2.5rem] px-8 py-6 pr-20 text-white placeholder-slate-500 outline-none focus:border-emerald-500/50 transition-all shadow-2xl"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
              aria-label="Pesan FAM AI"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className={`absolute right-3 top-3 w-14 h-14 rounded-full flex items-center justify-center active:scale-95 transition-all ${input.trim() && !isLoading ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-600'}`}
              aria-label="Kirim pesan"
            >
              <Send size={24} />
            </button>
          </form>
          <div className="mt-4 flex items-center justify-center gap-6 text-[9px] font-black text-slate-600 uppercase tracking-[0.2em]">
             <span className="flex items-center gap-1.5"><ShieldCheck size={12} /> FAM SECURE CORE</span>
             <span className="flex items-center gap-1.5"><Sparkles size={12} /> FADEL AQRAM MARPAUNG SYSTEM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
