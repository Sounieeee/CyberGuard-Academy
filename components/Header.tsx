import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const ShieldIcon: React.FC<{ className: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
  </svg>
);

const MenuIcon: React.FC<{ className: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon: React.FC<{ className: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMenuOpen) {
      setTimeout(() => {
        const firstFocusableElement = mobileMenuRef.current?.querySelector('a');
        firstFocusableElement?.focus();
      }, 100);
    }
  }, [isMenuOpen]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors font-display ${
      isActive ? 'bg-secondary text-accent' : 'text-text-primary hover:bg-secondary hover:text-white'
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-md text-base font-medium transition-colors font-display ${
      isActive ? 'bg-secondary text-accent' : 'text-text-primary hover:bg-secondary hover:text-white'
    }`;

  const navLinks = (
    <>
      <NavLink to="/" className={navLinkClass}>Home</NavLink>
      <NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink>
      <NavLink to="/lessons" className={navLinkClass}>Lessons</NavLink>
      <NavLink to="/resources" className={navLinkClass}>Resources</NavLink>
      <NavLink to="/faq" className={navLinkClass}>FAQ</NavLink>
      <NavLink to="/about" className={navLinkClass}>About</NavLink>
    </>
  );

  return (
    <header className="bg-secondary/80 backdrop-blur-sm sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center gap-2">
              <ShieldIcon className="h-8 w-8 text-accent" />
              <span className="text-white font-bold text-xl font-display">CyberGuard Academy</span>
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-secondary inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-white hover:bg-border-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <CloseIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div ref={mobileMenuRef} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             <NavLink to="/" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
             <NavLink to="/dashboard" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>Dashboard</NavLink>
             <NavLink to="/lessons" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>Lessons</NavLink>
             <NavLink to="/resources" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>Resources</NavLink>
             <NavLink to="/faq" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>FAQ</NavLink>
             <NavLink to="/about" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>About</NavLink>
             <NavLink to="/contact" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;