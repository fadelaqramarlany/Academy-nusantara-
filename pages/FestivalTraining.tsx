
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, Trophy, Timer, BrainCircuit, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const FestivalTraining: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 p-12 rounded-[2.5rem] text-white mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h1 className="text-4xl font-extrabold mb-4 flex items-center gap-3">
              <BrainCircuit size={40} /> Latihan Festival
            </h1>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl">
              Mode simulasi khusus untuk mempersiapkan diri menghadapi Festival Sekolah. Tanpa peringkat, fokus pada evaluasi dan penguasaan materi.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-bold">
                <Timer size={16} /> 3 Menit Per Kuis
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-bold">
                <ShieldCheck size={16} /> Evaluasi Mendalam
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Cara Latihan</h2>
            <ul className="space-y-6">
              {[
                { title: "Pilih Mapel", desc: "Pilih mata pelajaran yang akan dilombakan di festival nanti." },
                { title: "Mulai Simulasi", desc: "Kerjakan soal dengan batasan waktu 3 menit seperti di festival asli." },
                { title: "Cek Evaluasi", desc: "Lihat jawaban benar dan pelajari kesalahanmu segera." }
              ].map((step, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 font-bold flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{step.title}</h3>
                    <p className="text-slate-500 text-sm">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold mb-2">Mulai Latihan Sekarang</h2>
            <Link to="/categories/SD" className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold">SD</div>
                <div><p className="font-bold">Latihan Level SD</p><p className="text-xs text-slate-400 uppercase font-bold tracking-widest">30 Pelajaran</p></div>
              </div>
              <ChevronRight className="text-slate-300 group-hover:text-blue-500" />
            </Link>
            <Link to="/categories/SMP" className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold">SMP</div>
                <div><p className="font-bold">Latihan Level SMP</p><p className="text-xs text-slate-400 uppercase font-bold tracking-widest">30 Pelajaran</p></div>
              </div>
              <ChevronRight className="text-slate-300 group-hover:text-emerald-500" />
            </Link>
            <Link to="/categories/SMA" className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-purple-500 hover:shadow-md transition flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center font-bold">SMA</div>
                <div><p className="font-bold">Latihan Level SMA</p><p className="text-xs text-slate-400 uppercase font-bold tracking-widest">30 Pelajaran</p></div>
              </div>
              <ChevronRight className="text-slate-300 group-hover:text-purple-500" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FestivalTraining;
