
import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, BookOpen, GraduationCap, ChevronRight, Award, Zap, Brain, UserPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionDiv = motion.div as any;

const Home: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#020617] via-[#0f172a] to-blue-900 py-24 px-4 border-b-8 border-emerald-500">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <MotionDiv 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white z-10"
          >
            <div className="inline-flex items-center bg-emerald-500/10 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-emerald-500/20 text-emerald-400">
              <Zap className="w-3 h-3 mr-2 fill-emerald-400" /> DIGITAL EDUCATION SYSTEM
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tighter uppercase">
              ACADEMY<br/><span className="text-emerald-500">NUSANTARA</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-lg leading-relaxed font-bold uppercase tracking-tight">
              Pusat Kuis Pendidikan Nasional Terpadu. Standar Kurikulum Indonesia Terkini.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="#pendaftaran" 
                className="bg-white text-[#0f172a] px-10 py-5 rounded-2xl font-black shadow-2xl hover:bg-emerald-50 transition-all text-center flex items-center justify-center gap-3 uppercase tracking-widest active:scale-95"
              >
                Daftar Sekarang <UserPlus size={20} />
              </a>
              <Link 
                to="/festival" 
                className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black shadow-2xl hover:bg-emerald-700 transition-all text-center flex items-center justify-center gap-3 border border-emerald-500 uppercase tracking-widest active:scale-95"
              >
                Ikuti Festival <Trophy size={20} />
              </Link>
            </div>
          </MotionDiv>
          
          <MotionDiv 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative hidden md:block"
          >
            <div className="relative z-10 bg-[#1e293b] p-10 rounded-[3.5rem] shadow-2xl border-2 border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600&auto=format&fit=crop" 
                alt="Education" 
                className="rounded-3xl shadow-inner mb-8 opacity-90 border-2 border-white/5 grayscale"
              />
              <div className="grid grid-cols-2 gap-5">
                <div className="bg-white/5 p-6 rounded-3xl border border-white/10 flex items-center gap-4 group hover:bg-emerald-600/10 transition-colors text-white">
                  <div className="bg-emerald-600 p-3 rounded-2xl"><BookOpen className="text-white w-6 h-6" /></div>
                  <div><p className="text-[10px] text-slate-500 font-black uppercase">Kurikulum</p><p className="font-black uppercase tracking-tighter">NASIONAL</p></div>
                </div>
                <div className="bg-white/5 p-6 rounded-3xl border border-white/10 flex items-center gap-4 group hover:bg-blue-600/10 transition-colors text-white">
                  <div className="bg-blue-600 p-3 rounded-2xl"><Trophy className="text-white w-6 h-6" /></div>
                  <div><p className="text-[10px] text-slate-500 font-black uppercase">Prestasi</p><p className="font-black uppercase tracking-tighter">JUARA</p></div>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Registration Section */}
      <section id="pendaftaran" className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
           <div className="bg-white p-12 rounded-[3rem] shadow-2xl border-t-8 border-blue-600">
              <div className="text-center mb-10">
                 <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">PENDAFTARAN SISWA</h2>
                 <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-2">Masuk ke Database Prestasi Nasional</p>
              </div>
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <MotionDiv
                    key="registration-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <form
                      className="grid md:grid-cols-2 gap-6"
                      onSubmit={(e) => {
                        e.preventDefault();
                        setIsSubmitted(true);
                      }}
                    >
                       <div className="space-y-4">
                          <label htmlFor="fullName" className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Nama Lengkap</label>
                          <input id="fullName" type="text" placeholder="Nama sesuai rapor..." required className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 outline-none font-bold" />
                       </div>
                       <div className="space-y-4">
                          <label htmlFor="nisn" className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">NISN</label>
                          <input id="nisn" type="text" placeholder="Nomor Induk Siswa..." required className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 outline-none font-bold" />
                       </div>
                       <div className="space-y-4">
                          <label htmlFor="schoolName" className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Asal Sekolah</label>
                          <input id="schoolName" type="text" placeholder="Nama sekolah lengkap..." required className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 outline-none font-bold" />
                       </div>
                       <div className="space-y-4">
                          <label htmlFor="gradeLevel" className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Jenjang</label>
                          <select id="gradeLevel" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 outline-none font-bold">
                             <option>SD</option>
                             <option>SMP</option>
                             <option>SMA</option>
                          </select>
                       </div>
                       <button type="submit" className="md:col-span-2 bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl mt-4">Simpan Data Peserta</button>
                    </form>
                  </MotionDiv>
                ) : (
                  <MotionDiv
                    key="success-message"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                    role="status"
                    aria-live="polite"
                  >
                    <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                      <Zap size={40} className="fill-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4">PENDAFTARAN BERHASIL!</h3>
                    <p className="text-slate-600 font-bold mb-8">Data Anda telah tersimpan di Database Nasional. Silakan mulai kuis pertama Anda untuk menguji kompetensi.</p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-emerald-600 font-black uppercase tracking-widest text-sm hover:underline"
                    >
                      Daftar Kembali
                    </button>
                  </MotionDiv>
                )}
              </AnimatePresence>
           </div>
        </div>
      </section>

      {/* Levels Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">JENJANG PENDIDIKAN</h2>
            <div className="w-20 h-2 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-slate-500 max-w-2xl mx-auto font-bold uppercase text-xs tracking-[0.3em]">Kurikulum Nasional • Umum • Agama</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { level: "SD", title: "SEKOLAH DASAR", icon: <BookOpen />, subjects: "HARD" },
              { level: "SMP", title: "MENENGAH PERTAMA", icon: <GraduationCap />, subjects: "EXTREME" },
              { level: "SMA", title: "MENENGAH ATAS", icon: <Award />, subjects: "IMPOSSIBLE" }
            ].map((item, idx) => (
              <MotionDiv 
                whileHover={{ y: -15 }}
                key={idx}
                className="bg-slate-50 p-12 rounded-[4rem] border-2 border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center group"
              >
                <div className={`w-20 h-20 rounded-[2rem] bg-slate-900 text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-xl`}>
                  {item.icon}
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-tight leading-none">{item.title}</h3>
                <div className="bg-red-50 text-red-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-10">
                  DIFF: {item.subjects}
                </div>
                <Link 
                  to={`/categories/${item.level}`}
                  className="mt-auto w-full py-5 rounded-[2rem] font-black bg-slate-900 text-white hover:bg-emerald-600 transition-all uppercase tracking-[0.2em] text-sm shadow-lg"
                >
                  Pilih Mapel
                </Link>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-950 py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <p className="text-5xl font-black text-emerald-500 mb-3 tracking-tighter">100+</p>
              <p className="text-slate-500 font-black uppercase tracking-widest text-xs">Bank Soal Pro</p>
            </div>
            <div>
              <p className="text-5xl font-black text-blue-500 mb-3 tracking-tighter">2025</p>
              <p className="text-slate-500 font-black uppercase tracking-widest text-xs">Edisi Terbaru</p>
            </div>
            <div>
              <p className="text-5xl font-black text-yellow-500 mb-3 tracking-tighter">1000+</p>
              <p className="text-slate-500 font-black uppercase tracking-widest text-xs">Peringkat Siswa</p>
            </div>
            <div>
              <p className="text-5xl font-black text-purple-500 mb-3 tracking-tighter">24/7</p>
              <p className="text-slate-500 font-black uppercase tracking-widest text-xs">Akses Belajar</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
