
import React from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({ name: '', school: '', message: '' });
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
                  <a href="https://wa.me/628827793100" className="text-2xl font-bold text-slate-900 hover:text-emerald-600 transition">0882 7793 100</a>
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
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-200 min-h-[500px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <h2 className="text-2xl font-bold text-slate-900 mb-8">Kirim Pesan Langsung</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { id: 'name', label: 'Nama Lengkap', type: 'text', placeholder: 'Masukkan nama Anda...' },
                      { id: 'school', label: 'Asal Sekolah', type: 'text', placeholder: 'Masukkan nama sekolah...' }
                    ].map(f => (
                      <div key={f.id}>
                        <label htmlFor={f.id} className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">{f.label}</label>
                        <input id={f.id} type={f.type} required className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder={f.placeholder} value={(formData as any)[f.id]} onChange={e => setFormData({...formData, [f.id]: e.target.value})} />
                      </div>
                    ))}
                    <div>
                      <label htmlFor="msg" className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wide">Isi Pesan</label>
                      <textarea id="msg" required rows={3} className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="Ketik pesan..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 active:scale-95">Kirim Pesan <Send size={18} /></button>
                  </form>
                  <p className="text-center text-slate-400 text-[10px] mt-8 italic uppercase font-bold">"Hubungi admin untuk pendaftaran festival"</p>
                </motion.div>
              ) : (
                <motion.div key="success" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-8" role="status">
                  <CheckCircle2 size={64} className="text-emerald-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">Pesan Terkirim!</h2>
                  <p className="text-slate-600 mb-8 text-sm font-medium">Terima kasih. Admin akan segera menghubungi Anda.</p>
                  <button onClick={() => setIsSubmitted(false)} className="text-blue-600 font-bold uppercase text-[10px] tracking-widest hover:underline">Kirim Pesan Lain</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
