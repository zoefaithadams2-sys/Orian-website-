
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from '../assets/icons';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Properties', path: '/properties' },
  { name: 'Contact Us', path: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const NavLink: React.FC<{ path: string, children: React.ReactNode, onClick?: () => void }> = ({ path, children, onClick }) => {
    const isActive = location.pathname === path;
    return (
      <Link
        to={path}
        onClick={onClick}
        className={`text-sm font-semibold transition-colors duration-300 ${
          isActive ? 'text-brand-gold' : 'text-white hover:text-brand-gold'
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <header className="bg-brand-blue sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-xl font-bold tracking-wider">
              RYAN'S <span className="text-brand-gold">AUCTION</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <nav className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <NavLink key={link.name} path={link.path}>
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                path={link.path}
                onClick={() => setIsOpen(false)}
              >
                <span className="block px-3 py-2 rounded-md text-base font-medium">{link.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
