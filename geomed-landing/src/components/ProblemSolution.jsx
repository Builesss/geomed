import React, { useEffect, useRef } from 'react';
import { AlertTriangle, CheckCircle, TrendingDown, TrendingUp, Users, DollarSign } from 'lucide-react';

const problems = [
  { icon: <DollarSign className="w-5 h-5" />,    text: 'Software geoespacial de alto costo fuera del alcance de PYMEs' },
  { icon: <TrendingDown className="w-5 h-5" />,  text: 'Decisiones basadas en intuición en lugar de datos concretos' },
  { icon: <Users className="w-5 h-5" />,          text: 'Datos abiertos disponibles pero sin análisis accesible para usuarios no técnicos' },
  { icon: <AlertTriangle className="w-5 h-5" />,  text: 'Alto riesgo de fracaso comercial por desconocimiento del entorno competitivo' },
];

const solutions = [
  { icon: <CheckCircle className="w-5 h-5" />,   text: 'Plataforma unificada de bajo costo con datos abiertos de Medellín' },
  { icon: <TrendingUp className="w-5 h-5" />,    text: 'Visualización interactiva e intuitiva para cualquier usuario' },
  { icon: <CheckCircle className="w-5 h-5" />,   text: 'IA generativa que interpreta datos y entrega recomendaciones estratégicas' },
  { icon: <CheckCircle className="w-5 h-5" />,   text: 'Democratización del geomarketing: nivel empresarial para emprendedores' },
];

function useInView(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity    = '1';
          entry.target.style.transform  = 'translateY(0)';
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
}

function AnimatedCard({ children, delay = 0, side = 'left' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity   = '0';
    el.style.transform = `translateX(${side === 'left' ? '-40px' : '40px'})`;
    el.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity   = '1';
          el.style.transform = 'translateX(0)';
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, side]);

  return <div ref={ref}>{children}</div>;
}

export default function ProblemSolution() {
  const titleRef = useRef(null);
  useInView(titleRef);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity   = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  }, []);

  return (
    <section id="problema" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-sm font-semibold text-accent-400 uppercase tracking-widest mb-3 block">
            El desafío
          </span>
          <h2 className="section-title mb-4">
            Del problema a la{' '}
            <span className="gradient-text">solución</span>
          </h2>
          <p className="section-subtitle mx-auto">
            La falta de acceso a herramientas de análisis territorial limita a los emprendedores.
            GeoMed cambia eso.
          </p>
        </div>

        {/* Problem / Solution cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Problem */}
          <AnimatedCard delay={0} side="left">
            <div className="glass-card p-8 h-full border-red-500/20 hover:border-red-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-red-500/15 border border-red-500/30">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">El Problema</h3>
                  <p className="text-sm text-dark-400">Realidad actual del ecosistema emprendedor</p>
                </div>
              </div>
              <ul className="space-y-4">
                {problems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <div className="p-1.5 rounded-lg bg-red-500/10 text-red-400 mt-0.5 flex-shrink-0 group-hover:bg-red-500/20 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-dark-300 leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-sm text-dark-400 italic">
                  "Tradicionalmente, el análisis de geomarketing ha estado reservado para grandes
                  corporaciones con capacidad para contratar consultorías costosas."
                </p>
              </div>
            </div>
          </AnimatedCard>

          {/* Solution */}
          <AnimatedCard delay={150} side="right">
            <div className="glass-card p-8 h-full border-accent-500/20 hover:border-accent-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-accent-500/15 border border-accent-500/30">
                  <CheckCircle className="w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">La Solución</h3>
                  <p className="text-sm text-dark-400">GeoMed Intelligence en acción</p>
                </div>
              </div>
              <ul className="space-y-4">
                {solutions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <div className="p-1.5 rounded-lg bg-accent-500/10 text-accent-400 mt-0.5 flex-shrink-0 group-hover:bg-accent-500/20 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-dark-300 leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-sm text-accent-400 font-medium">
                  ✓ Tecnología de código abierto · ✓ Datos públicos · ✓ IA generativa integrada
                </p>
              </div>
            </div>
          </AnimatedCard>
        </div>

        {/* Justification banner */}
        <AnimatedCard delay={300} side="left">
          <div className="mt-8 glass-card p-6 border-primary-500/30">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="p-3 rounded-xl bg-primary-600/20 border border-primary-500/30 flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-primary-400" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">¿Por qué GeoMed?</h4>
                <p className="text-dark-300 text-sm leading-relaxed">
                  La integración de datos geográficos abiertos, visualización interactiva y modelos de IA generativa
                  en una plataforma unificada de bajo costo permite a los emprendedores evaluar zonas, comprender
                  el mix económico y <strong className="text-white">estimar el éxito potencial de un negocio</strong>.
                  Esto fomenta el desarrollo económico local y optimiza la inversión.
                </p>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
