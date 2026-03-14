
import React from 'react';
import { HashRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { Trophy, Phone, Info, Home as HomeIcon, Menu, X, Brain, MessageSquare } from 'lucide-react';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Quiz from './pages/Quiz';
import FestivalTraining from './pages/FestivalTraining';
import SchoolFestival from './pages/SchoolFestival';
import About from './pages/About';
import Contact from './pages/Contact';
import ChatBot from './pages/ChatBot';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg shadow-lg">
                <Brain className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-extrabold text-blue-900 tracking-tight uppercase">ACADEMY <span className="text-emerald-600">NUSANTARA</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-slate-600 hover:text-blue-600 font-bold text-sm uppercase tracking-wider flex items-center gap-1.5 transition-colors"><HomeIcon size={16} /> Beranda</Link>
            <Link to="/festival" className="text-slate-600 hover:text-blue-600 font-bold text-sm uppercase tracking-wider flex items-center gap-1.5 transition-colors"><Trophy size={16} /> Festival</Link>
            <Link to="/chat" className="text-slate-600 hover:text-blue-600 font-bold text-sm uppercase tracking-wider flex items-center gap-1.5 transition-colors"><MessageSquare size={16} /> Tanya FAM AI</Link>
            <Link to="/tentang" className="text-slate-600 hover:text-blue-600 font-bold text-sm uppercase tracking-wider flex items-center gap-1.5 transition-colors"><Info size={16} /> Tentang</Link>
            <Link to="/kontak" className="text-slate-600 hover:text-blue-600 font-bold text-sm uppercase tracking-wider flex items-center gap-1.5 transition-colors"><Phone size={16} /> Kontak</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 p-2 active:scale-95 transition-transform"
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-4 shadow-xl">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-slate-600 font-bold uppercase text-xs tracking-widest">Beranda</Link>
          <Link to="/festival" onClick={() => setIsOpen(false)} className="block text-slate-600 font-bold uppercase text-xs tracking-widest">Festival</Link>
          <Link to="/chat" onClick={() => setIsOpen(false)} className="block text-slate-600 font-bold uppercase text-xs tracking-widest">Tanya FAM AI</Link>
          <Link to="/tentang" onClick={() => setIsOpen(false)} className="block text-slate-600 font-bold uppercase text-xs tracking-widest">Tentang</Link>
          <Link to="/kontak" onClick={() => setIsOpen(false)} className="block text-slate-600 font-bold uppercase text-xs tracking-widest">Kontak</Link>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-black mb-6 flex items-center gap-2 tracking-tight uppercase">
            <Brain className="text-emerald-500" /> Academy Nusantara
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed font-medium">
            Platform kuis pendidikan nasional terbesar di Indonesia. Dirancang untuk menguji kompetensi siswa secara adil dan transparan.
          </p>
        </div>
        <div>
          <h4 className="font-black mb-6 text-emerald-400 uppercase tracking-widest text-xs">Peta Kuis</h4>
          <ul className="space-y-3 text-slate-400 text-sm font-bold uppercase tracking-wider">
            <li><Link to="/categories/SD" className="hover:text-white transition-colors">Sekolah Dasar</Link></li>
            <li><Link to="/categories/SMP" className="hover:text-white transition-colors">Menengah Pertama</Link></li>
            <li><Link to="/categories/SMA" className="hover:text-white transition-colors">Menengah Atas</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-black mb-6 text-emerald-400 uppercase tracking-widest text-xs">Penyelenggara</h4>
          <p className="text-white text-lg font-black tracking-tighter uppercase mb-2">FADEL AQRAM MARPAUNG</p>
          <p className="text-slate-500 text-xs font-bold uppercase mb-4">Direktur Utama Academy Nusantara</p>
          <div className="flex space-x-4">
            <a
              href="https://wa.me/628827793100"
              className="bg-white/5 border border-white/10 p-3 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all active:scale-95"
              aria-label="Hubungi kami di WhatsApp"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 mt-16 pt-8 text-center text-slate-600 text-[10px] font-black uppercase tracking-[0.5em]">
        &copy; {new Date().getFullYear()} Academy Nusantara &bull; Indonesia Maju Digital
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories/:level" element={<Categories />} />
            <Route path="/quiz/:level/:subject" element={<Quiz />} />
            <Route path="/latihan" element={<FestivalTraining />} />
            <Route path="/festival" element={<SchoolFestival />} />
            <Route path="/tentang" element={<About />} />
            <Route path="/kontak" element={<Contact />} />
            <Route path="/chat" element={<ChatBot />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
