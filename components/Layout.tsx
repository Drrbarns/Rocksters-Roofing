import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { NAV_ITEMS, CONTACT_INFO } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className={`w-10 h-10 rounded bg-rockster-accent flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:bg-rockster-blue transition-colors duration-300 transform group-hover:scale-110`}>
            R
          </div>
          <div className="flex flex-col">
            <span className={`font-display font-bold text-lg leading-tight transition-colors duration-300 ${scrolled ? 'text-rockster-blue' : 'text-slate-800'}`}>ROCKSTERS</span>
            <span className={`text-[10px] tracking-widest uppercase transition-colors duration-300 ${scrolled ? 'text-slate-500' : 'text-slate-600'}`}>Roofing Systems</span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-all duration-300 hover:text-rockster-accent relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-rockster-accent after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${
                  isActive ? 'text-rockster-accent font-semibold after:w-full' : scrolled ? 'text-slate-600' : 'text-slate-800'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
             to="/contact"
             className="px-5 py-2 bg-rockster-blue text-white text-sm font-medium rounded hover:bg-rockster-accent transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get Quote
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-slate-700 hover:text-rockster-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 pt-24 px-6 ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
        <div className="flex flex-col gap-6">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-lg font-medium border-b border-slate-100 pb-2 ${isActive ? 'text-rockster-accent' : 'text-slate-800'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="mt-4 p-6 bg-rockster-concrete rounded-lg">
             <p className="text-sm font-semibold text-slate-500 mb-2">Need immediate assistance?</p>
             <a href={`tel:${CONTACT_INFO.phones[0].replace(/\s/g, '')}`} className="flex items-center gap-2 text-rockster-blue font-bold text-lg">
               <Phone size={20} /> {CONTACT_INFO.phones[0]}
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-rockster-blue text-white pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="text-2xl font-display font-bold mb-6">Rocksters</h3>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            Market leader in roofing sheets, steel trusses, ceiling joists and plasterboards.
            Manufacturing in Ghana since 1992.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-rockster-accent hover:scale-110 transition-all duration-300"><Facebook size={16} /></a>
            <a href="#" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-rockster-accent hover:scale-110 transition-all duration-300"><Twitter size={16} /></a>
            <a href="#" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-rockster-accent hover:scale-110 transition-all duration-300"><Instagram size={16} /></a>
            <a href="#" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-rockster-accent hover:scale-110 transition-all duration-300"><Linkedin size={16} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 border-l-4 border-rockster-accent pl-3">Quick Links</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            {NAV_ITEMS.slice(0, 5).map(item => (
              <li key={item.path}>
                <NavLink to={item.path} className="hover:text-white hover:pl-2 transition-all duration-300 block">{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 border-l-4 border-rockster-accent pl-3">Contact Us</h4>
          <ul className="space-y-4 text-sm text-slate-300">
            <li className="flex gap-3 items-start group">
              <MapPin size={18} className="text-rockster-accent shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              <span>{CONTACT_INFO.address}</span>
            </li>
            <li className="flex gap-3 items-center group">
              <Phone size={18} className="text-rockster-accent shrink-0 group-hover:scale-110 transition-transform" />
              <span>{CONTACT_INFO.phones.join(" / ")}</span>
            </li>
            <li className="flex gap-3 items-center group">
              <Mail size={18} className="text-rockster-accent shrink-0 group-hover:scale-110 transition-transform" />
              <span>{CONTACT_INFO.email}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 border-l-4 border-rockster-accent pl-3">Newsletter</h4>
          <p className="text-xs text-slate-400 mb-4">Subscribe to get latest updates and offers. We promise not to spam!</p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email*"
              className="bg-white/5 border border-white/10 text-white px-4 py-3 text-sm rounded focus:outline-none focus:border-rockster-accent transition-colors"
            />
            <button type="button" className="bg-rockster-accent text-white py-3 px-4 text-sm font-bold rounded hover:bg-sky-500 transition-colors uppercase tracking-wide hover:shadow-lg active:scale-95 duration-300">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <p>&copy; Copyright Rocksters Group. All Rights Reserved 2025.</p>
        <p className="mt-2 md:mt-0">Designed for Excellence.</p>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center justify-center group"
            title="Chat on WhatsApp"
        >
            <MessageCircle size={28} className="group-hover:animate-pulse" />
        </a>
    )
}

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Layout;