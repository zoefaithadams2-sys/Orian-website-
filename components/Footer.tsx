
import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, TwitterIcon, WhatsAppIcon } from '../assets/icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div>
            <h3 className="text-lg font-bold tracking-wider">RYAN'S <span className="text-brand-gold">AUCTION</span></h3>
            <p className="mt-4 text-sm text-gray-300">Your trusted partner in Cape Town real estate and property auctions.</p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-brand-gold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="text-sm hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link to="/properties" className="text-sm hover:text-brand-gold transition-colors">Properties</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-brand-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-brand-gold">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center">
                <span className="font-semibold mr-2">P:</span> +27 21 123 4567
              </li>
              <li className="flex items-center">
                <span className="font-semibold mr-2">E:</span> info@ra-pp.co.za
              </li>
              <li className="text-gray-300">
                Adderley Street, Cape Town, RSA
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-brand-gold">Follow Us</h3>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-300 hover:text-brand-gold transition-colors"><FacebookIcon className="h-6 w-6" /></a>
              <a href="#" className="text-gray-300 hover:text-brand-gold transition-colors"><InstagramIcon className="h-6 w-6" /></a>
              <a href="#" className="text-gray-300 hover:text-brand-gold transition-colors"><TwitterIcon className="h-6 w-6" /></a>
              <a href="#" className="text-gray-300 hover:text-brand-gold transition-colors"><WhatsAppIcon className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ryan’s Auction & Private Property. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
