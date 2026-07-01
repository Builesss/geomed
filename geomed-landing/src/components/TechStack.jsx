import React, { useEffect, useRef } from 'react';

const techs = [
  { name: 'Python',      color: '#3776AB', bg: '#3776AB15', icon: '🐍', desc: 'Backend & procesamiento de datos' },
  { name: 'Streamlit',   color: '#FF4B4B', bg: '#FF4B4B15', icon: '⚡', desc: 'Interfaz web interactiva UX/UI' },
  { name: 'Folium',      color: '#77B829', bg: '#77B82915', icon: '🗺️', desc: 'Cartografía interactiva' },
  { name: 'Pandas',      color: '#150458', bg: '#7B68EE15', icon: '📊', desc: 'Análisis de datos y formato Parquet' },
  { name: 'Supabase',    color: '#3ECF8E', bg: '#3ECF8E15', icon: '🗄️', desc: 'Gestión de usuarios y base de datos' },
  { name: 'OpenRouter',  color: '#A78BFA', bg: '#A78BFA15', icon: '🤖', desc: 'API de modelos LLM / IA generativa' },
];

const dataSources = [
  { name: 'Alcaldía de Medellín', desc: 'Datos catastrales y socioeconómicos', icon: '🏛️' },
  { name: 'Metro de Medellín',    desc: 'Red de transporte y movilidad',       icon: '🚇' },
  { name: 'DANE',                 desc: 'Demografía y estratificación',        icon: '📈' },
  { name: 'OpenStreetMap',        desc: 'Cartografía base y POIs',             icon: '🌍' },
];

function TechBadge({ tech, delay }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity   = '0';
    el.style.transform = 'scale(0.85)';
    el.style.transition = `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'scale(1)'; } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref}>
      <div
        className="glass-card-hover p-5 flex flex-col items-center text-center gap-3 group"
        style={{ borderColor: `${tech.color}30`, background: tech.bg }}
      >
        <span className="text-3xl">{tech.icon}</span>
        <div>
          <p className="font-bold text-white text-sm">{tech.name}</p>
          <p className="text-xs text-dark-400 mt-1 leading-relaxed">{tech.desc}</p>
        </div>
        <div
          className="w-full h-0.5 rounded-full mt-1 opacity-40 group-hover:opacity-100 transition-opacity"
          style={{ background: `linear-gradient(90deg, transparent, ${tech.color}, transparent)` }}
        />
      </div>
    </div>
  );
}

export default function TechStack() {
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
    <section id="metodologia" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(37,99,235,0.06) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-sm font-semibold text-accent-400 uppercase tracking-widest mb-3 block">
            Metodología & Stack
          </span>
          <h2 className="section-title mb-4">
            Tecnología de{' '}
            <span className="gradient-text">código abierto</span>
          </h2>
          <p className="section-subtitle mx-auto">
            GeoMed Intelligence fue construido con las mejores herramientas open source,
            combinadas para crear una solución de nivel empresarial.
          </p>
        </div>

        {/* Tech stack grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {techs.map((t, i) => <TechBadge key={t.name} tech={t} delay={i * 80} />)}
        </div>

        {/* Methodology flow */}
        <div className="glass-card p-8 mb-8 border-primary-500/20">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Flujo de Datos y Procesamiento
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {[
              { step: '01', label: 'Recolección',   desc: 'Datos abiertos de Medellín',    icon: '📡' },
              { step: '02', label: 'Limpieza',       desc: 'Reproyección WGS84 · Parquet',  icon: '🔧' },
              { step: '03', label: 'Indexación',     desc: 'Pandas + análisis geoespacial', icon: '📊' },
              { step: '04', label: 'Visualización',  desc: 'Folium + Streamlit UI',         icon: '🗺️' },
              { step: '05', label: 'IA Generativa',  desc: 'LLMs via OpenRouter',           icon: '🤖' },
            ].map((step, i, arr) => (
              <React.Fragment key={step.step}>
                <div className="flex flex-col items-center text-center gap-2 flex-1">
                  <div className="text-3xl mb-1">{step.icon}</div>
                  <span className="text-xs font-bold text-primary-400 uppercase tracking-widest">{step.step}</span>
                  <p className="font-semibold text-white text-sm">{step.label}</p>
                  <p className="text-xs text-dark-400">{step.desc}</p>
                </div>
                {i < arr.length - 1 && (
                  <div className="hidden md:block text-dark-600 text-2xl flex-shrink-0">→</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Data sources */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4 text-center">Fuentes de Datos</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dataSources.map((ds, i) => (
              <div key={i} className="glass-card p-4 flex items-center gap-3 hover:border-primary-500/40 transition-all duration-300">
                <span className="text-2xl">{ds.icon}</span>
                <div>
                  <p className="font-semibold text-white text-sm">{ds.name}</p>
                  <p className="text-xs text-dark-400">{ds.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
