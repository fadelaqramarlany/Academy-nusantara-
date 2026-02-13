
import React from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

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
    setTimeout(() => setIsSubmitted(false), 5000);
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
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Kirim Pesan Langsung</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Nama Lengkap</label>
                <input 
                  id="name"
                  type="text" 
                  required
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                  placeholder="Masukkan nama Anda..."
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="school" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Asal Sekolah</label>
                <input 
                  id="school"
                  type="text" 
                  required
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                  placeholder="Masukkan nama sekolah..."
                  value={formData.school}
                  onChange={(e) => setFormData({...formData, school: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Isi Pesan</label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                  placeholder="Ketik pesan atau permohonan pendaftaran festival..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSubmitted}
                className={`w-full ${isSubmitted ? 'bg-emerald-600' : 'bg-blue-600 hover:bg-blue-700'} text-white py-5 rounded-2xl font-bold text-lg shadow-xl transition flex items-center justify-center gap-2`}
              >
                {isSubmitted ? 'Pesan Terkirim!' : 'Kirim Pesan'} <Send size={20} />
              </button>
              {isSubmitted && (
                <p className="text-emerald-600 text-center font-bold text-sm animate-pulse">
                  Terima kasih! Admin akan segera menghubungi Anda.
                </p>
              )}
            </form>
            <p className="text-center text-slate-400 text-sm mt-8 italic">
              "Hubungi admin untuk pendaftaran festival dan kerja sama sekolah"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
