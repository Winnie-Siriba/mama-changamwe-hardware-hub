
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const features = [
    'Quality hardware products from trusted brands',
    'Expert advice from experienced staff',
    'Competitive prices for all budgets',
    'Convenient location in Changamwe, Mombasa'
  ];

  return (
    <section className="py-16 bg-kenya-beige kenya-pattern">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-kenya-brown">
              About <span className="text-kenya-red">Mama New Road</span> Hardware
            </h2>
            <p className="text-gray-700 mb-6">
              For over 15 years, Mama New Road Hardware has been serving the Changamwe community and beyond with quality construction materials and hardware supplies. We take pride in offering expert advice, quality products, and excellent customer service.
            </p>
            <p className="text-gray-700 mb-6">
              Our friendly staff is always ready to help you find the right materials for your project, whether you're a professional contractor or a DIY enthusiast. We understand the importance of reliable tools and materials, which is why we source our products from trusted suppliers.
            </p>
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-kenya-red flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="bg-kenya-red hover:bg-kenya-red/90">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-square bg-white p-3 shadow-xl rotate-3 z-10 relative">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Store Image</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-kenya-sand -z-10 -translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
