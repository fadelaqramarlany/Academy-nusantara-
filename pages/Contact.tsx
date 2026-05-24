
import React from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    school: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', school: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Hubungi Admin</h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Punya pertanyaan mengenai pendaftaran festival, kerja sama sekolah, atau kendala teknis? Hubungi kami melalui formulir atau kontak langsung di bawah ini.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={28} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">WhatsApp Admin</p>
                  <a href="https://wa.me/628827793100" aria-label="WhatsApp Admin" className="text-2xl font-bold text-slate-900 hover:text-emerald-600 transition active:scale-95 inline-block">0882 7793 100</a>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email Resmi</p>
                  <p className="text-2xl font-bold text-slate-900">admin@academynusantara.id</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-slate-200 text-slate-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Lokasi Pusat</p>
                  <p className="text-lg font-bold text-slate-900 leading-tight">Jakarta Selatan, DKI Jakarta, Indonesia</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-blue-900 rounded-3xl text-white">
              <p className="font-bold mb-2">Penyelenggara:</p>
              <p className="text-2xl font-black">FADEL AQRAM MARPAUNG</p>
              <p className="text-blue-200 text-sm mt-4 italic">"Berdedikasi untuk mencerdaskan kehidupan bangsa melalui kompetisi akademik yang inklusif."</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-200 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.95 }}>
                  <h2 className="text-2xl font-bold text-slate-900 mb-8 uppercase tracking-tight">Kirim Pesan Langsung</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Nama Lengkap</label>
                      <input id="name" type="text" required placeholder="Masukkan nama Anda..." className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 outline-none font-bold transition-all" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                    </div>
                    <div>
                      <label htmlFor="school" className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Asal Sekolah</label>
                      <input id="school" type="text" required placeholder="Masukkan nama sekolah..." className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 outline-none font-bold transition-all" value={formData.school} onChange={(e) => setFormData({...formData, school: e.target.value})} />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Isi Pesan</label>
                      <textarea id="message" required rows={4} placeholder="Ketik pesan atau permohonan pendaftaran festival..." className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-blue-500 outline-none font-bold transition-all" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                    </div>
                    <button type="submit" className="w-full bg-slate-950 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95">
                      Kirim Pesan <Send size={20} />
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="bg-emerald-100 p-6 rounded-[2.5rem] mb-8 text-emerald-600">
                    <CheckCircle2 size={64} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4">PESAN TERKIRIM!</h3>
                  <p className="text-slate-500 font-bold uppercase tracking-tight text-sm leading-relaxed max-w-xs mb-10">Admin Academy Nusantara akan menghubungi Anda segera melalui email atau WhatsApp.</p>
                  <button onClick={() => setIsSubmitted(false)} className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl active:scale-95">Kirim Pesan Lagi</button>
                </motion.div>
              )}
            </AnimatePresence>
            <p className="text-center text-slate-400 text-[10px] font-black uppercase tracking-widest mt-8">
              "Pusat Layanan Informasi Academy Nusantara"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
