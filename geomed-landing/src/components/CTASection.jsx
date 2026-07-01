import React, { useEffect, useRef } from 'react';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';

export default function CTASection() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity   = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(37,99,235,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Floating decorative dots */}
      <div className="absolute top-10 left-20 w-64 h-64 rounded-full opacity-10 blur-3xl"
           style={{ background: 'radial-gradient(circle, #2563eb, transparent)' }} />
      <div className="absolute bottom-10 right-20 w-64 h-64 rounded-full opacity-10 blur-3xl"
           style={{ background: 'radial-gradient(circle, #22c55e, transparent)' }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div ref={ref}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-500/40 bg-accent-500/10 text-accent-300 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Disponible ahora para emprendedores de Medellín
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            ¿Listo para tomar{' '}
            <span className="gradient-text">decisiones</span>
            {' '}basadas en datos?
          </h2>

          <p className="text-lg text-dark-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            GeoMed Intelligence te da el poder del análisis territorial de nivel corporativo
            a una fracción del costo. Empieza a explorar Medellín con inteligencia real.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#modulos"
              className="btn-primary text-base px-10 py-4 text-lg"
            >
              Comenzar gratis <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#metodologia"
              className="btn-secondary text-base px-10 py-4"
            >
              Ver metodología
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-dark-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent-400" />
              <span>Datos oficiales de Medellín</span>
            </div>
            <span className="text-dark-700 hidden sm:block">•</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
              <span>Tecnología 100% open source</span>
            </div>
            <span className="text-dark-700 hidden sm:block">•</span>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span>IA generativa integrada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
