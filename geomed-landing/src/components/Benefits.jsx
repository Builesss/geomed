import React, { useEffect, useRef } from 'react';
import {
  Globe, DollarSign, Brain, Lock, Zap, BarChart2,
  Shield, Layers, Clock, Users
} from 'lucide-react';

const benefits = [
  {
    icon:        <Globe className="w-6 h-6" />,
    title:       'Datos Abiertos',
    description: 'Integra cientos de datasets públicos de la Alcaldía de Medellín, Metro y entidades gubernamentales.',
    color:       'text-blue-400',
    bg:          'bg-blue-500/10 border-blue-500/20',
  },
  {
    icon:        <DollarSign className="w-6 h-6" />,
    title:       'Bajo Costo',
    description: 'Accede a análisis de nivel corporativo sin las costosas consultorías tradicionales de geomarketing.',
    color:       'text-green-400',
    bg:          'bg-green-500/10 border-green-500/20',
  },
  {
    icon:        <Brain className="w-6 h-6" />,
    title:       'IA Generativa',
    description: 'Modelos LLM que actúan como consultores expertos, contextualizando datos y generando recomendaciones.',
    color:       'text-purple-400',
    bg:          'bg-purple-500/10 border-purple-500/20',
  },
  {
    icon:        <Zap className="w-6 h-6" />,
    title:       'Decisiones Rápidas',
    description: 'Reduce el tiempo de análisis de semanas a minutos con dashboards interactivos y en tiempo real.',
    color:       'text-amber-400',
    bg:          'bg-amber-500/10 border-amber-500/20',
  },
  {
    icon:        <BarChart2 className="w-6 h-6" />,
    title:       'Analítica Avanzada',
    description: 'Procesa grandes volúmenes de datos geoespaciales con Pandas y formatos Parquet optimizados.',
    color:       'text-cyan-400',
    bg:          'bg-cyan-500/10 border-cyan-500/20',
  },
  {
    icon:        <Users className="w-6 h-6" />,
    title:       'Para No Técnicos',
    description: 'UX/UI Premium B2B diseñada para que cualquier emprendedor use herramientas de nivel experto.',
    color:       'text-rose-400',
    bg:          'bg-rose-500/10 border-rose-500/20',
  },
  {
    icon:        <Shield className="w-6 h-6" />,
    title:       'Escalable',
    description: 'Arquitectura construida sobre tecnologías de código abierto, lista para crecer con tu negocio.',
    color:       'text-indigo-400',
    bg:          'bg-indigo-500/10 border-indigo-500/20',
  },
  {
    icon:        <Layers className="w-6 h-6" />,
    title:       'Modular',
    description: 'Usa solo los módulos que necesitas: Radar, BI, Simulador o Consultoría IA — o todos a la vez.',
    color:       'text-teal-400',
    bg:          'bg-teal-500/10 border-teal-500/20',
  },
  {
    icon:        <Clock className="w-6 h-6" />,
    title:       'Actualización Continua',
    description: 'Datos constantemente sincronizados con fuentes oficiales para que siempre decidas con info vigente.',
    color:       'text-orange-400',
    bg:          'bg-orange-500/10 border-orange-500/20',
  },
];

function BenefitCard({ item, delay }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity   = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`;

    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref}>
      <div className={`glass-card-hover p-6 h-full group`}>
        <div className={`inline-flex p-3 rounded-xl border mb-4 ${item.bg} transition-transform duration-300 group-hover:scale-110`}>
          <span className={item.color}>{item.icon}</span>
        </div>
        <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
        <p className="text-sm text-dark-400 leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
}

export default function Benefits() {
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
    <section id="beneficios" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(34,197,94,0.05) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-sm font-semibold text-accent-400 uppercase tracking-widest mb-3 block">
            Propuesta de valor
          </span>
          <h2 className="section-title mb-4">
            Todo lo que{' '}
            <span className="gradient-text">necesitas</span>
            {' '}en una plataforma
          </h2>
          <p className="section-subtitle mx-auto">
            GeoMed Intelligence democratiza el análisis territorial con tecnología de punta
            sin las barreras de costo ni de conocimiento técnico.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((item, i) => (
            <BenefitCard key={i} item={item} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
