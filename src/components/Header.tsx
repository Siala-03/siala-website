import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Server,
  Shield,
  Wifi,
  Cpu,
  Zap,
  Code2,
} from 'lucide-react';
import { Button } from './ui/Button';
import { twMerge } from 'tailwind-merge';

const services = [
  { name: 'Intelligent Security & Surveillance', path: '/services/security-surveillance', icon: Shield },
  { name: 'Cabling & Network Infrastructure', path: '/services/connectivity-infrastructure', icon: Wifi },
  { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Zap },
  { name: 'Compute & Cloud Infrastructure', path: '/services/compute-cloud', icon: Server },
  { name: 'Smart Building & Power Systems', path: '/services/smart-building-power', icon: Cpu },
  { name: 'Integrated Software Solutions', path: '/services/integrated-software', icon: Code2 },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Industries', path: '/industries' },
    { name: 'Why Us', path: '/why-siala' },
  ];

  return (
    <header
      className={twMerge(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-navy-950/97 backdrop-blur-md border-navy-800 py-3.5 shadow-lg shadow-navy-950/50'
          : 'bg-transparent border-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0 group">
            <img
              src="/sialalogo.png"
              alt="Siala Solutions"
              className="h-10 w-auto opacity-90 group-hover:opacity-100 transition-opacity duration-200"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            <Link
              to="/"
              className={twMerge(
                'text-[13px] font-medium transition-colors hover:text-copper-400',
                location.pathname === '/' ? 'text-copper-500' : 'text-slate-300'
              )}
            >
              Home
            </Link>

            {navLinks.slice(0, 1).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={twMerge(
                  'text-[13px] font-medium transition-colors hover:text-copper-400',
                  location.pathname === link.path ? 'text-copper-500' : 'text-slate-300'
                )}
              >
                {link.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative">
              <button
                className={twMerge(
                  'flex items-center gap-1.5 text-[13px] font-medium transition-colors hover:text-copper-400 py-2',
                  location.pathname.includes('/services') ? 'text-copper-500' : 'text-slate-300'
                )}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                Services
                <ChevronDown className={twMerge('w-3.5 h-3.5 transition-transform duration-200', servicesDropdownOpen ? 'rotate-180' : '')} />
              </button>

              <div
                className={twMerge(
                  'absolute top-full left-1/2 -translate-x-1/2 w-80 bg-navy-900 border border-navy-700 shadow-2xl shadow-navy-950/60 transition-all duration-200 origin-top',
                  servicesDropdownOpen ? 'opacity-100 scale-100 visible translate-y-0' : 'opacity-0 scale-95 invisible -translate-y-1'
                )}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <div className="p-2">
                  <Link
                    to="/services"
                    className="block px-4 py-3 text-xs font-mono font-medium text-slate-400 hover:text-white hover:bg-navy-800 transition-colors border-b border-navy-700 mb-2 uppercase tracking-wider"
                  >
                    All Services Overview
                  </Link>
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.name}
                        to={service.path}
                        className="flex items-center gap-3 px-4 py-3 text-[13px] text-slate-300 hover:text-white hover:bg-navy-800 transition-colors group/item"
                      >
                        <Icon className="w-4 h-4 text-copper-500/70 group-hover/item:text-copper-400 shrink-0" />
                        <span className="leading-snug">{service.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={twMerge(
                  'text-[13px] font-medium transition-colors hover:text-copper-400',
                  location.pathname === link.path ? 'text-copper-500' : 'text-slate-300'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <Button href="/contact" variant="primary" size="sm" className="hidden md:inline-flex">
              Get a Consultation
            </Button>
            <button
              className="md:hidden text-slate-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy-950 border-b border-navy-800 shadow-xl">
          <div className="px-6 py-5 flex flex-col gap-5">
            <Link to="/" className="text-sm font-medium text-slate-300 hover:text-white">Home</Link>
            <Link to="/about" className="text-sm font-medium text-slate-300 hover:text-white">About</Link>

            <div className="flex flex-col gap-2">
              <Link to="/services" className="text-sm font-medium text-slate-300 hover:text-white">
                Services
              </Link>
              <div className="pl-4 flex flex-col gap-3 border-l border-navy-700 ml-2 mt-1">
                {services.map((service) => (
                  <Link key={service.name} to={service.path} className="text-xs text-slate-400 hover:text-white leading-snug">
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/industries" className="text-sm font-medium text-slate-300 hover:text-white">Industries</Link>
            <Link to="/why-siala" className="text-sm font-medium text-slate-300 hover:text-white">Why Us</Link>

            <div className="pt-4 mt-1 border-t border-navy-800">
              <Button href="/contact" variant="primary" className="w-full">
                Get a Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
