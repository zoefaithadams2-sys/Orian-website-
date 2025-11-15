
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ to, onClick, children, variant = 'primary', className = '' }) => {
  const baseStyles = 'inline-block text-center font-semibold px-8 py-3 rounded-md transition-all duration-300 shadow-md transform hover:scale-105';

  const variantStyles = {
    primary: 'bg-brand-blue text-white hover:bg-blue-900',
    secondary: 'bg-brand-gold text-white hover:bg-yellow-600',
    outline: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-brand-blue',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
};

export default Button;
