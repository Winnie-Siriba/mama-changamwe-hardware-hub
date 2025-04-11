
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm">
      {/* Top bar with contact info */}
      <div className="bg-kenya-red text-white px-4 py-1">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-sm">
              <Phone className="h-3 w-3 mr-1" />
              <span>+254 722 259 803</span>
            </div>
            <div className="hidden md:flex items-center text-sm">
              <MapPin className="h-3 w-3 mr-1" />
              <span>Changamwe, Mombasa, Kenya</span>
            </div>
          </div>
          <div className="text-sm">
            Open:Monday - Saturday 8.00 AM Sunday: Closed from 12.00
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-kenya-red">Mama New Road</span>
            <span className="text-kenya-brown font-semibold ml-1">Hardware</span>
          </Link>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-kenya-brown hover:text-kenya-red font-medium transition">Home</Link>
            <Link to="/products" className="text-kenya-brown hover:text-kenya-red font-medium transition">Products</Link>
            <Link to="/services" className="text-kenya-brown hover:text-kenya-red font-medium transition">Services</Link>
            <Link to="/about" className="text-kenya-brown hover:text-kenya-red font-medium transition">About</Link>
            <Link to="/contact" className="text-kenya-brown hover:text-kenya-red font-medium transition">Contact</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-kenya-brown hover:text-kenya-red">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-kenya-brown"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <Link to="/" className="text-kenya-brown hover:text-kenya-red font-medium py-2 transition">Home</Link>
            <Link to="/products" className="text-kenya-brown hover:text-kenya-red font-medium py-2 transition">Products</Link>
            <Link to="/services" className="text-kenya-brown hover:text-kenya-red font-medium py-2 transition">Services</Link>
            <Link to="/about" className="text-kenya-brown hover:text-kenya-red font-medium py-2 transition">About</Link>
            <Link to="/contact" className="text-kenya-brown hover:text-kenya-red font-medium py-2 transition">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
