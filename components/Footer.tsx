
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary border-t border-border-color">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white">CyberGuard Academy</h3>
            <p className="mt-2 text-text-secondary">Your trusted resource for learning about cybersecurity.</p>
          </div>
          <div>
            <h3 className="text-md font-semibold text-white tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/lessons" className="text-text-secondary hover:text-accent transition-colors">Lessons</Link></li>
              <li><Link to="/glossary" className="text-text-secondary hover:text-accent transition-colors">Glossary</Link></li>
              <li><Link to="/about" className="text-text-secondary hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-text-secondary hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold text-white tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/privacy-policy" className="text-text-secondary hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use" className="text-text-secondary hover:text-accent transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border-color pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-text-secondary text-sm">&copy; {new Date().getFullYear()} CyberGuard Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;