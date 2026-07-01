import React, { useEffect, useRef, useState } from 'react';
import { Building2, MapPin, Train, Cpu } from 'lucide-react';

const counters = [
  {
    icon:    <Building2 className="w-7 h-7" />,
    end:     500000,
    suffix:  '+',
    label:   'Establecimientos comerciales indexados',
    color:   'text-blue-400',
    bg:      'bg-blue-600/15',
    border:  'border-blue-500/25',
  },
  {
    icon:    <MapPin className="w-7 h-7" />,
    end:     16,
    suffix:  '',
    label:   'Comunas y barrios mapeados',
    color:   'text-green-400',
    bg:      'bg-green-600/15',
    border:  'border-green-500/25',
  },
  {
    icon:    <Train className="w-7 h-7" />,
    end:     27,
    suffix:  '',
    label:   'Estaciones de Metro integradas',
    color:   'text-purple-400',
    bg:      'bg-purple-600/15',
    border:  'border-purple-500/25',
  },
  {
    icon:    <Cpu className="w-7 h-7" />,
    end:     4,
    suffix:  '',
    label:   'Módulos de inteligencia artificial',
    color:   'text-amber-400',
    bg:      'bg-amber-600/15',
    border:  'border-amber-500/25',
  },
];

function useCounter(end, duration = 2000, started) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const startVal = 0;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(startVal + (end - startVal) * eased));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [end, duration, started]);

  return count;
}

function StatCard({ item, delay }) {
  const ref     = useRef(null);
  const [vis, setVis] = useState(false);
  const count   = useCounter(item.end, item.end > 1000 ? 2500 : 1500, vis);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity   = '0';
    el.style.transform = 'scale(0.9)';
    el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.style.opacity   = '1';
          el.style.transform = 'scale(1)';
          setVis(true);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const displayValue =
    item.end >= 1000
      ? count >= 1000
        ? `${(count / 1000).toFixed(0)}K`
        : count
      : count;

  return (
    <div ref={ref}>
      <div className={`glass-card p-8 flex flex-col items-center text-center border ${item.border} hover:-translate-y-1 transition-all duration-300 group`}>
        <div className={`p-4 rounded-2xl ${item.bg} mb-5 transition-transform duration-300 group-hover:scale-110`}>
          <span className={item.color}>{item.icon}</span>
        </div>
        <div className="text-5xl font-black text-white mb-1 tabular-nums">
          {displayValue}{item.suffix}
        </div>
        <p className="text-sm text-dark-400 font-medium leading-relaxed">{item.label}</p>
      </div>
    </div>
  );
}

export default function Stats() {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity   = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background stripe */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0"
           style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(37,99,235,0.04) 50%, transparent 100%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-sm font-semibold text-accent-400 uppercase tracking-widest mb-3 block">
            Impacto real
          </span>
          <h2 className="section-title mb-4">
            Números que{' '}
            <span className="gradient-text">hablan por sí solos</span>
          </h2>
          <p className="section-subtitle mx-auto">
            GeoMed Intelligence ya indexa e integra datos de todo el ecosistema comercial y urbano de Medellín.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {counters.map((item, i) => (
            <StatCard key={i} item={item} delay={i * 120} />
          ))}
        </div>

        {/* Extra info bar */}
        <div className="mt-12 glass-card p-6 border-primary-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <p className="text-white font-semibold text-lg">
                Construido con tecnología de código abierto
              </p>
              <p className="text-dark-400 text-sm mt-1">
                Python · Streamlit · Folium · Pandas · Supabase · OpenRouter LLMs
              </p>
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-500/10 border border-accent-500/30">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-400 animate-pulse" />
              <span className="text-accent-300 font-semibold text-sm">Plataforma activa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
