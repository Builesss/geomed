import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { label: 'Inicio',       href: '#inicio' },
  { label: 'Módulos',      href: '#modulos' },
  { label: 'Beneficios',   href: '#beneficios' },
  { label: 'Metodología',  href: '#metodologia' },
  { label: 'Contacto',     href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState('#inicio');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-white/95 backdrop-blur-xl border-b border-dark-200 shadow-lg shadow-black/5'
          : 'py-5 bg-white border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center group" onClick={() => handleNav('#inicio')}>
          <img
            src="/logo.png"
            alt="GeoMed Intelligence"
            className="h-24 w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNav(link.href)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === link.href
                  ? 'text-primary-700 bg-primary-50 border border-primary-200'
                  : 'text-dark-600 hover:text-primary-600 hover:bg-dark-50'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#modulos"
            className="btn-primary text-sm px-5 py-2.5"
          >
            Comenzar ahora <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-dark-600 hover:text-primary-600 hover:bg-dark-50 transition-all"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 bg-white/95 backdrop-blur-xl border-t border-dark-200">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNav(link.href)}
              className="block px-4 py-3 rounded-lg text-sm font-medium text-dark-600 hover:text-primary-600 hover:bg-dark-50 transition-all mb-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#modulos"
            className="btn-primary mt-3 justify-center text-sm"
          >
            Comenzar ahora <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
