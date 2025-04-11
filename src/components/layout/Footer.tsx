
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-kenya-brown text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Mama New Road Hardware</h3>
            <p className="mb-4 text-kenya-sand">Your trusted hardware partner in Changamwe, Mombasa. Quality materials for all your construction and home improvement needs.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-kenya-sand transition" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-kenya-sand transition" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-kenya-sand transition">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-kenya-sand transition">Products</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-kenya-sand transition">Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-kenya-sand transition">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-kenya-sand transition">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-kenya-sand" />
                <span>New Road, Changamwe Area, Mombasa, Kenya</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-kenya-sand" />
                <span>+254 722 259 803</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-kenya-sand" />
                <span>info@milkaoenga@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-0.5 text-kenya-sand" />
                <span>Monday - Saturday: 8:00 AM - 6:00 PM<br />Sunday: Closed from 12.00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Mama New Road Hardware. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
