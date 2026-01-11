
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Trophy, ChevronRight, Zap, Users, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

const SchoolFestival: React.FC = () => {
  const now = new Date();
  const today = now.getDate();
  const currentMonth = new Intl.DateTimeFormat('id-ID', { month: 'long' }).format(now);
  
  // Logika: Buka tanggal 1, tutup tanggal 2 dan seterusnya
  const isOpen = today === 1;

  return (
    <div className="bg-white pb-32">
      {/* Banner */}
      <section className="bg-slate-950 py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className={`inline-flex items-center ${isOpen ? 'bg-emerald-500' : 'bg-red-500'} text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-10 shadow-xl animate-pulse`}>
            {isOpen ? <Zap size={16} className="mr-2 fill-white" /> : <Lock size={16} className="mr-2" />}
            {isOpen ? 'FESTIVAL SEDANG BERLANGSUNG' : 'FESTIVAL SEDANG DITUTUP'}
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-[-0.05em] leading-none uppercase">
            FESTIVAL <span className="text-yellow-500">{currentMonth}</span>
          </h1>
          <p className="text-slate-400 text-xl md:text-2xl max-w-4xl mx-auto mb-16 leading-relaxed font-medium">
            Kompetisi bergengsi antar sekolah di seluruh Nusantara. Dibuka secara serentak setiap tanggal 1.
          </p>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="flex items-center gap-4 text-white">
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-yellow-500"><Calendar /></div>
              <div className="text-left"><p className="text-[10px] text-slate-500 font-black uppercase">Jadwal</p><p className="font-bold">Tanggal 1 Setiap Bulan</p></div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-emerald-500"><Users /></div>
              <div className="text-left"><p className="text-[10px] text-slate-500 font-black uppercase">Peserta</p><p className="font-bold">Nasional</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Start Festival Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { level: "SD", diff: "SANGAT SULIT", desc: "Kompetisi Dasar Pro" },
            { level: "SMP", diff: "EKSTRIM", desc: "Kompetisi Menengah" },
            { level: "SMA", diff: "IMPOSSIBLE", desc: "Olimpiade Nasional" }
          ].map((item, idx) => (
            <MotionDiv 
              whileHover={isOpen ? { y: -10 } : {}}
              key={idx} 
              className={`bg-white p-10 rounded-[3.5rem] shadow-2xl border-4 ${isOpen ? 'border-emerald-500' : 'border-slate-100 grayscale'} text-center flex flex-col items-center`}
            >
              <div className={`w-20 h-20 rounded-[2rem] bg-slate-900 text-white flex items-center justify-center mb-8 shadow-xl`}>
                <Trophy size={32} className={isOpen ? "text-yellow-400" : "text-slate-500"} />
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-2 uppercase tracking-tight">FESTIVAL {item.level}</h3>
              <p className="text-slate-500 font-bold text-sm mb-2">{item.desc}</p>
              
              <div className="w-full space-y-4 my-10">
                 <div className="flex items-center justify-between text-xs font-bold border-b border-slate-100 pb-3">
                    <span className="text-slate-400">JUMLAH SOAL</span>
                    <span className="text-slate-900">40 SOAL</span>
                 </div>
                 <div className="flex items-center justify-between text-xs font-bold border-b border-slate-100 pb-3">
                    <span className="text-slate-400">WAKTU</span>
                    <span className="text-slate-900">45 MENIT</span>
                 </div>
                 <div className="flex items-center justify-between text-xs font-bold border-b border-slate-100 pb-3">
                    <span className="text-slate-400">TINGKAT</span>
                    <span className="text-red-600 uppercase">{item.diff}</span>
                 </div>
              </div>

              {isOpen ? (
                <Link 
                  to={`/quiz/${item.level}/Festival%20Nasional?mode=festival`}
                  className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2"
                >
                  MASUK KOMPETISI <ChevronRight size={18} />
                </Link>
              ) : (
                <button 
                  disabled
                  className="w-full bg-slate-100 text-slate-400 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-2 cursor-not-allowed"
                >
                  DIBUKA TGL 1 <Lock size={18} />
                </button>
              )}
            </MotionDiv>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SchoolFestival;
