
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Truck, Ruler, Calculator, MessageCircle } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="border-none shadow-md hover:shadow-xl transition-shadow bg-white">
      <CardContent className="p-6 text-center">
        <div className="mx-auto w-14 h-14 bg-kenya-red rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Truck className="text-white h-6 w-6" />,
      title: 'Delivery Services',
      description: 'We offer convenient delivery services to your construction site or home within Mombasa and surrounding areas.'
    },
    {
      icon: <Ruler className="text-white h-6 w-6" />,
      title: 'Custom Cutting',
      description: 'Get materials cut to your exact specifications with our precision cutting services for pipes, wood, and metal.'
    },
    {
      icon: <Calculator className="text-white h-6 w-6" />,
      title: 'Material Estimation',
      description: 'Not sure how much material you need? Our experts will help you calculate the right quantities for your project.'
    },
    {
      icon: <MessageCircle className="text-white h-6 w-6" />,
      title: 'Expert Consultation',
      description: 'Receive professional advice from our experienced staff to help you make informed decisions for your projects.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a range of services to help make your construction and home improvement projects successful
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
