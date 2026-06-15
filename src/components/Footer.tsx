import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex items-center shrink-0">
              <img
                src="/sialalogo.png"
                alt="Siala Solutions"
                className="h-7 w-auto brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-200"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              East Africa's integrated smart infrastructure company. One company, one SLA — from the cable in the wall to the firewall protecting it all.
            </p>
            <div className="flex items-center gap-3 mt-1">
              <a
                href="#"
                className="w-9 h-9 bg-navy-900 border border-navy-800 flex items-center justify-center text-slate-400 hover:text-copper-500 hover:border-copper-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-navy-900 border border-navy-800 flex items-center justify-center text-slate-400 hover:text-copper-500 hover:border-copper-500/40 transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.26 5.632 5.905-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.2em] mb-6">Company</h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Industries', path: '/industries' },
                { name: 'Why Us', path: '/why-siala' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-copper-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.2em] mb-6">Practice Areas</h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: 'Security & Surveillance', path: 'security-surveillance' },
                { name: 'Cabling & Networking', path: 'connectivity-infrastructure' },
                { name: 'Cybersecurity', path: 'cybersecurity' },
                { name: 'Compute & Cloud', path: 'compute-cloud' },
                { name: 'Smart Building & Power', path: 'smart-building-power' },
              { name: 'Integrated Software Solutions', path: 'integrated-software' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={`/services/${item.path}`}
                    className="text-slate-400 hover:text-copper-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.2em] mb-6">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-copper-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  40KG 42 St, Ijuru Co-working Space<br />
                  Kigali, Rwanda
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Phone className="w-4 h-4 text-copper-500 shrink-0" />
                <a href="tel:+250783809328" className="hover:text-copper-400 transition-colors">
                  +250 783 809 328
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="w-4 h-4 text-copper-500 shrink-0" />
                <a href="mailto:sialasolutions@gmail.com" className="hover:text-copper-400 transition-colors">
                  sialasolutions@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-navy-800">
          <p className="text-slate-500 text-xs font-mono">
            © {new Date().getFullYear()} Siala Solutions Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
