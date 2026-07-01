import React, { useEffect, useRef } from 'react';
import { Map, BarChart3, Target, Bot, ArrowRight } from 'lucide-react';

const modules = [
  {
    id:          'radar',
    icon:        <Map className="w-8 h-8" />,
    color:       'blue',
    badge:       '01',
    title:       'Radar Territorial',
    description: 'Exploración geográfica interactiva de todas las comunas, barrios y puntos de interés comercial de Medellín.',
    features:    ['Mapa interactivo con Folium', 'Límites catastrales WGS84', 'POIs comerciales', 'Estaciones de Metro'],
    gradient:    'from-blue-600/20 to-blue-800/5',
    border:      'border-blue-500/30 hover:border-blue-400/60',
    badgeBg:     'bg-blue-600/20 text-blue-300',
    iconBg:      'bg-blue-600/20 text-blue-400',
    glow:        'hover:shadow-blue-900/30',
  },
  {
    id:          'bi',
    icon:        <BarChart3 className="w-8 h-8" />,
    color:       'purple',
    badge:       '02',
    title:       'Análisis BI',
    description: 'Métricas, gráficos estadísticos y dashboards del tejido comercial de cada zona de la ciudad.',
    features:    ['Mix económico por zona', 'Demografía y estratificación', 'Densidad comercial', 'Tendencias del mercado'],
    gradient:    'from-purple-600/20 to-purple-800/5',
    border:      'border-purple-500/30 hover:border-purple-400/60',
    badgeBg:     'bg-purple-600/20 text-purple-300',
    iconBg:      'bg-purple-600/20 text-purple-400',
    glow:        'hover:shadow-purple-900/30',
  },
  {
    id:          'simulador',
    icon:        <Target className="w-8 h-8" />,
    color:       'green',
    badge:       '03',
    title:       'Simulador de Éxito',
    description: 'Evalúa la viabilidad de abrir un negocio en cualquier zona, con modelos predictivos basados en datos reales.',
    features:    ['Score de viabilidad', 'Análisis de competencia', 'Flujo peatonal estimado', 'Riesgo geoeconómico'],
    gradient:    'from-green-600/20 to-green-800/5',
    border:      'border-green-500/30 hover:border-green-400/60',
    badgeBg:     'bg-green-600/20 text-green-300',
    iconBg:      'bg-green-600/20 text-green-400',
    glow:        'hover:shadow-green-900/30',
  },
  {
    id:          'ia',
    icon:        <Bot className="w-8 h-8" />,
    color:       'amber',
    badge:       '04',
    title:       'Consultoría IA',
    description: 'Un consultor experto potenciado por LLMs que contextualiza datos geoespaciales y entrega recomendaciones estratégicas.',
    features:    ['OpenRouter / LLMs integrados', 'Análisis de contexto local', 'Recomendaciones automáticas', 'Reportes personalizados'],
    gradient:    'from-amber-600/20 to-amber-800/5',
    border:      'border-amber-500/30 hover:border-amber-400/60',
    badgeBg:     'bg-amber-600/20 text-amber-300',
    iconBg:      'bg-amber-600/20 text-amber-400',
    glow:        'hover:shadow-amber-900/30',
  },
];

function ModuleCard({ mod, delay }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity   = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity   = '1';
          el.style.transform = 'translateY(0)';
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref}>
      <div
        className={`glass-card p-7 h-full flex flex-col group cursor-pointer transition-all duration-400 ${mod.border} hover:-translate-y-2 hover:shadow-2xl ${mod.glow}`}
        style={{ background: `linear-gradient(135deg, rgba(15,23,42,0.8), rgba(15,23,42,0.6))` }}
      >
        {/* Top */}
        <div className="flex items-start justify-between mb-5">
          <div className={`p-3 rounded-xl ${mod.iconBg} transition-transform duration-300 group-hover:scale-110`}>
            {mod.icon}
          </div>
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${mod.badgeBg} border border-current/20`}>
            {mod.badge}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
          {mod.title}
        </h3>
        <p className="text-dark-400 text-sm leading-relaxed mb-5 flex-1">
          {mod.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {mod.features.map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-dark-300">
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className={`flex items-center gap-1 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${mod.iconBg} bg-transparent`}
             style={{ color: 'inherit' }}>
          <span className="text-dark-300 group-hover:text-white transition-colors">Explorar módulo</span>
          <ArrowRight className="w-4 h-4 text-dark-300 group-hover:text-white group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </div>
  );
}

export default function Modules() {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity   = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity   = '1';
          el.style.transform = 'translateY(0)';
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="modulos" className="py-24 relative">
      {/* BG accent */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.06) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-sm font-semibold text-accent-400 uppercase tracking-widest mb-3 block">
            Plataforma modular
          </span>
          <h2 className="section-title mb-4">
            Cuatro módulos,{' '}
            <span className="gradient-text">una visión completa</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Cada módulo está diseñado para responder una pregunta estratégica clave
            del ecosistema empresarial de Medellín.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {modules.map((mod, i) => (
            <ModuleCard key={mod.id} mod={mod} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
