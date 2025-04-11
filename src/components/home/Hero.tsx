
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-kenya-beige overflow-hidden">
      <div className="absolute inset-0 z-0 kenya-pattern opacity-60"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-kenya-brown mb-4">
            Quality Hardware <span className="text-kenya-red">For Every Project</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Your trusted hardware partner in Changamwe, Mombasa. We provide quality materials for all your construction and home improvement needs.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-kenya-red hover:bg-kenya-red/90">
              <Link to="/products">
                Browse Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-kenya-brown text-kenya-brown hover:bg-kenya-brown/10">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
