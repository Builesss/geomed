import React from 'react';
import { MapPin, Mail, ExternalLink, GitBranch, Link2, MessageCircle } from 'lucide-react';

const footerLinks = {
  Plataforma: [
    { label: 'Radar Territorial', href: '#modulos' },
    { label: 'Análisis BI',       href: '#modulos' },
    { label: 'Simulador',         href: '#modulos' },
    { label: 'Consultoría IA',    href: '#modulos' },
  ],
  Empresa: [
    { label: 'Nosotros',     href: '#' },
    { label: 'Metodología',  href: '#metodologia' },
    { label: 'Blog',         href: '#' },
    { label: 'Contacto',     href: '#contacto' },
  ],
  Recursos: [
    { label: 'Documentación',     href: '#' },
    { label: 'Datos Abiertos',    href: '#' },
    { label: 'API Reference',     href: '#' },
    { label: 'Casos de uso',      href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-dark-950/90 backdrop-blur-sm">
      {/* Glow accent */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.05) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        {/* Top section */}
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo.png" alt="GeoMed Intelligence" className="h-20 w-auto" style={{ mixBlendMode: 'screen' }} />
            </div>
            <p className="text-dark-400 text-sm leading-relaxed mb-6 max-w-xs">
              Plataforma de geo-inteligencia y analítica territorial para democratizar
              el acceso al análisis geoespacial en el ecosistema empresarial de Medellín.
            </p>

            {/* Data credits */}
            <div className="glass-card p-3 inline-flex items-start gap-2 mb-6">
              <MapPin className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-dark-400">
                Datos: Alcaldía de Medellín · Metro · DANE · OpenStreetMap
              </p>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: <GitBranch className="w-4 h-4" />,      href: '#' },
                { icon: <Link2 className="w-4 h-4" />,           href: '#' },
                { icon: <MessageCircle className="w-4 h-4" />,   href: '#' },
                { icon: <Mail className="w-4 h-4" />,            href: 'mailto:info@geomed.co' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-dark-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-dark-400 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/8 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dark-500">
            <p>© {new Date().getFullYear()} GeoMed Intelligence. Todos los derechos reservados.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-dark-300 transition-colors">Privacidad</a>
              <a href="#" className="hover:text-dark-300 transition-colors">Términos</a>
              <span className="flex items-center gap-1">
                Hecho con ❤️ en{' '}
                <MapPin className="w-3 h-3 text-accent-400 inline" />
                Medellín, Colombia
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
