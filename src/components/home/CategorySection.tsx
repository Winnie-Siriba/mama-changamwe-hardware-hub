
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  link: string;
}

const CategoryCard = ({ title, icon, description, link }: CategoryCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-t-4 border-t-kenya-red">
      <Link to={link}>
        <CardContent className="p-6">
          <div className="bg-kenya-red/10 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-kenya-brown group-hover:text-kenya-red transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex items-center text-kenya-red font-medium">
            <span>View Products</span>
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

const CategorySection = () => {
  const categories = [
    {
      title: 'Building Materials',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-kenya-red">
          <rect x="3" y="8" width="18" height="12" rx="2" />
          <path d="M10 8V5c0-1.1.9-2 2-2s2 .9 2 2v3" />
        </svg>
      ),
      description: 'Cement, sand, stones, and all essential construction materials.',
      link: '/products/building-materials'
    },
    {
      title: 'Hardware Tools',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-kenya-red">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      description: 'Hand tools, power tools, and specialized equipment for professionals.',
      link: '/products/tools'
    },
    {
      title: 'Plumbing',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-kenya-red">
          <path d="m12 13-2-2H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3l2-2h4l2 2h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3l-2 2Z" />
        </svg>
      ),
      description: 'Pipes, fittings, fixtures and supplies for all plumbing needs.',
      link: '/products/plumbing'
    },
    {
      title: 'Electrical',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-kenya-red">
          <path d="M8 14v2a1 1 0 0 0 1 1h2v-3H8Z" />
          <path d="M13 14v3h2a1 1 0 0 0 1-1v-2h-3Z" />
          <rect width="16" height="10" x="4" y="5" rx="2" />
        </svg>
      ),
      description: 'Wires, switches, fixtures, and complete electrical solutions.',
      link: '/products/electrical'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Product Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of quality products for all your construction and home improvement needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              icon={category.icon}
              description={category.description}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
