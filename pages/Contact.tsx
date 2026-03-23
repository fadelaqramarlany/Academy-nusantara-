
import React from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({ name: '', school: '', message: '' });
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#10b981', '#3b82f6', '#1e3a8a'] });
    setFormData({ name: '', school: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Hubungi Admin</h1>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">Punya pertanyaan? Hubungi kami melalui formulir atau kontak langsung di bawah ini.</p>
          <div className="space-y-8">
            {[
              { icon: <MessageCircle size={28} />, label: 'WhatsApp Admin', value: '0882 7793 100', href: 'https://wa.me/628827793100', color: 'emerald' },
              { icon: <Mail size={28} />, label: 'Email Resmi', value: 'admin@academynusantara.id', color: 'blue' },
              { icon: <MapPin size={28} />, label: 'Lokasi Pusat', value: 'Jakarta Selatan, Indonesia', color: 'slate' }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className={`w-14 h-14 bg-${item.color}-100 text-${item.color}-600 rounded-2xl flex items-center justify-center flex-shrink-0`}>{item.icon}</div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                  {item.href ? <a href={item.href} className="text-2xl font-bold text-slate-900 hover:text-emerald-600 transition">{item.value}</a> : <p className="text-2xl font-bold text-slate-900">{item.value}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-200 min-h-[500px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Kirim Pesan Langsung</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {['name', 'school'].map(id => (
                    <div key={id}>
                      <label htmlFor={id} className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{id === 'name' ? 'Nama' : 'Sekolah'}</label>
                      <input id={id} type="text" required value={(formData as any)[id]} onChange={e => setFormData({ ...formData, [id]: e.target.value })} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="Masukkan data..." />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Pesan</label>
                    <textarea id="message" required rows={3} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="Ketik pesan..." />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-blue-700 transition-all active:scale-95 flex items-center justify-center gap-2">Kirim Pesan <Send size={20} /></button>
                </form>
              </motion.div>
            ) : (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center" role="status" aria-live="polite">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 size={40} /></div>
                <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Terkirim!</h2>
                <p className="text-slate-600 font-medium mb-10">Kami akan menghubungi Anda segera.</p>
                <button onClick={() => setIsSubmitted(false)} className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all active:scale-95 uppercase tracking-widest text-sm">Kirim Lagi</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Contact;
