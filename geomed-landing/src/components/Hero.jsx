import React, { useEffect, useRef } from 'react';
import { MapPin, ArrowRight, Play, ChevronDown, Zap, Globe, TrendingUp } from 'lucide-react';

const dots = [
  { top: '20%', left: '15%', delay: '0s',    size: 8,  color: '' },
  { top: '35%', left: '72%', delay: '0.5s',  size: 6,  color: '' },
  { top: '60%', left: '25%', delay: '1s',    size: 10, color: 'green' },
  { top: '75%', left: '65%', delay: '1.5s',  size: 6,  color: '' },
  { top: '45%', left: '50%', delay: '2s',    size: 8,  color: 'green' },
  { top: '18%', left: '55%', delay: '0.8s',  size: 5,  color: '' },
  { top: '82%', left: '38%', delay: '1.2s',  size: 7,  color: 'green' },
  { top: '30%', left: '88%', delay: '0.3s',  size: 9,  color: '' },
  { top: '65%', left: '82%', delay: '1.8s',  size: 5,  color: 'green' },
  { top: '52%', left: '8%',  delay: '0.6s',  size: 7,  color: '' },
];

const stats = [
  { icon: <Globe className="w-5 h-5" />,      value: '500K+',  label: 'Establecimientos' },
  { icon: <MapPin className="w-5 h-5" />,      value: '16',     label: 'Comunas mapeadas' },
  { icon: <Zap className="w-5 h-5" />,         value: '4',      label: 'Módulos IA' },
  { icon: <TrendingUp className="w-5 h-5" />,  value: '100%',   label: 'Datos abiertos' },
];

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      el.style.opacity    = '1';
      el.style.transform  = 'translateY(0)';
    });
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)' }} />

      {/* Animated map dots */}
      {dots.map((d, i) => (
        <span
          key={i}
          className={`map-dot ${d.color}`}
          style={{
            top:             d.top,
            left:            d.left,
            animationDelay:  d.delay,
            width:           d.size,
            height:          d.size,
          }}
        />
      ))}

      {/* Connection lines SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="15%" y1="20%" x2="50%" y2="45%" stroke="#2563eb" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="72%" y1="35%" x2="50%" y2="45%" stroke="#2563eb" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="25%" y1="60%" x2="50%" y2="45%" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="65%" y1="75%" x2="50%" y2="45%" stroke="#2563eb" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="88%" y1="30%" x2="72%" y2="35%" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 4" />
      </svg>

      {/* Main content */}
      <div ref={containerRef} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
          Plataforma de Geo-Inteligencia para Medellín
        </div>

        {/* Headline */}
        <h1 className="section-title mb-6">
          La inteligencia territorial{' '}
          <span className="gradient-text">al alcance de todos</span>
        </h1>

        {/* Subheadline */}
        <p className="section-subtitle mx-auto mb-10 text-dark-300">
          Democratizamos el análisis geoespacial con datos abiertos, visualización interactiva
          e IA generativa para que los emprendedores de Medellín tomen decisiones estratégicas
          basadas en datos reales, no en intuición.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#modulos" className="btn-primary text-base px-8 py-4">
            Explorar plataforma <ArrowRight className="w-5 h-5" />
          </a>
          <button className="btn-secondary text-base px-8 py-4">
            <Play className="w-5 h-5 fill-current" /> Ver demo
          </button>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((s, i) => (
            <div
              key={i}
              className="glass-card p-4 flex flex-col items-center gap-2 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-2 rounded-lg bg-primary-600/20 text-primary-400">
                {s.icon}
              </div>
              <span className="text-2xl font-black text-white">{s.value}</span>
              <span className="text-xs text-dark-400 font-medium uppercase tracking-wider text-center">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#problema"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dark-500 hover:text-dark-300 transition-colors animate-bounce"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Descubrir</span>
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}
