import React from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}
export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className,
  icon,
  ...props
}: ButtonProps) {
  const baseStyles =
  'group inline-flex items-center justify-center font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-900 focus:ring-copper-500 active:scale-[0.98] hover:-translate-y-0.5';
  const variants = {
    primary:
    'bg-copper-500 text-white hover:bg-copper-400 hover:shadow-[0_0_20px_rgba(200,121,65,0.4)] border border-transparent',
    secondary:
    'bg-navy-800 text-white hover:bg-navy-700 hover:shadow-[0_0_20px_rgba(13,33,56,0.6)] border border-navy-700',
    outline:
    'bg-transparent text-white border border-navy-700 hover:border-copper-500 hover:text-copper-400 hover:bg-copper-500/5',
    ghost:
    'bg-transparent text-slate-300 hover:text-white hover:bg-navy-800 border border-transparent'
  };
  const sizes = {
    sm: 'text-sm px-4 py-2 gap-2',
    md: 'text-base px-6 py-3 gap-2',
    lg: 'text-lg px-8 py-4 gap-3'
  };
  const classes = twMerge(baseStyles, variants[variant], sizes[size], className);
  const renderIcon = () => {
    if (!icon) return null;
    return (
      <span className="ml-1 transition-transform duration-300 ease-out group-hover:translate-x-1">
        {icon}
      </span>);

  };
  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
        {renderIcon()}
      </Link>);

  }
  return (
    <button className={classes} {...props}>
      {children}
      {renderIcon()}
    </button>);

}