
import React from 'react';
import { Target, ShieldCheck, Heart, Award, Zap, Code, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Brand Header */}
      <section className="bg-[#020617] py-40 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
           <div className="inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.4em] mb-12">
              <Zap size={16} /> NATIONAL EDUCATION PLATFORM
           </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-[-0.06em] leading-none uppercase">
            ACADEMY<br/><span className="text-emerald-500">NUSANTARA</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-400 leading-relaxed font-bold uppercase tracking-tight max-w-3xl mx-auto">
            Platform pendidikan digital yang dirancang untuk mendukung sistem evaluasi kuis nasional yang berkualitas.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="bg-slate-950 rounded-[4rem] p-12 shadow-2xl relative overflow-hidden border-b-8 border-emerald-500">
               <BookOpen size={80} className="text-emerald-400 mb-8" />
               <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-6">STANDAR NASIONAL</h3>
               <p className="text-slate-400 text-lg leading-relaxed mb-10 font-medium">
                 Menyediakan bank soal yang dikurasi secara ketat untuk mencakup materi mata pelajaran umum dan agama di seluruh Indonesia.
               </p>
               <div className="flex gap-4">
                  <div className="bg-white/5 p-4 rounded-3xl border border-white/10 flex-1 text-center">
                    <p className="text-emerald-400 font-black text-2xl">90+</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Mata Pelajaran</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-3xl border border-white/10 flex-1 text-center">
                    <p className="text-blue-400 font-black text-2xl">100%</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Gratis</p>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="space-y-16">
            <div>
              <div className="flex items-center gap-4 text-slate-900 mb-8">
                <div className="p-3 bg-slate-900 rounded-2xl text-white"><Target size={32} /></div>
                <h2 className="text-5xl font-black tracking-tighter uppercase">FILOSOFI KAMI</h2>
              </div>
              <p className="text-xl text-slate-500 leading-relaxed font-medium italic">
                "Menciptakan ekosistem pendidikan di mana setiap siswa di seluruh Nusantara memiliki akses yang sama terhadap evaluasi akademik yang berkualitas."
              </p>
            </div>
            
            <div className="grid gap-6">
                {[
                  { title: "KONTEN TERPERCAYA", desc: "Setiap soal disusun berdasarkan kurikulum yang berlaku di Indonesia." },
                  { title: "AKSESIBILITAS", desc: "Dapat diakses kapan saja dan di mana saja untuk mendukung belajar mandiri." },
                  { title: "INTEGRITAS", desc: "Sistem yang transparan dalam memberikan penilaian skor kuis." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-8 bg-slate-50 rounded-[3rem] border-2 border-slate-100 hover:border-emerald-500 transition-all group">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center flex-shrink-0 text-emerald-600">
                       <ShieldCheck size={24} />
                    </div>
                    <div>
                       <h4 className="font-black text-slate-900 uppercase text-md tracking-wider mb-2">{item.title}</h4>
                       <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* System Architect */}
      <section className="bg-slate-900 py-40 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
           <div className="w-24 h-24 bg-emerald-500 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(16,185,129,0.5)]">
              <Code size={48} className="text-white" />
           </div>
           <p className="text-emerald-400 font-black uppercase tracking-[0.5em] mb-6 text-sm">The Architect & Visionary</p>
           <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-[-0.05em] uppercase">Fadel Aqram<br/>Marpaung</h2>
           <div className="h-1 w-20 bg-emerald-500 mx-auto mb-12"></div>
           <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
             Pengembang dan arsitek di balik ekosistem **Academy Nusantara**. Berdedikasi untuk memajukan pendidikan Indonesia melalui platform digital.
           </p>
        </div>
      </section>

      <div className="py-12 text-center bg-slate-50 border-t border-slate-100">
         <p className="text-[10px] font-black text-slate-400 uppercase tracking-[1em] ml-[1em]">
           Academy Nusantara &bull; Indonesia Digital Education &bull; 2024
         </p>
      </div>
    </div>
  );
};

export default About;
