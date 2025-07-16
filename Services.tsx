import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Hammer, Home, Wrench, Palette } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Home className="h-8 w-8 text-yellow-500" />,
      title: 'Custom Cabinetry',
      description: 'Handcrafted kitchen and bathroom cabinets tailored to your space and style.'
    },
    {
      icon: <Hammer className="h-8 w-8 text-yellow-500" />,
      title: 'Built-in Furniture',
      description: 'Custom entertainment centers, bookshelves, and storage solutions.'
    },
    {
      icon: <Wrench className="h-8 w-8 text-yellow-500" />,
      title: 'Closet Systems',
      description: 'Organized storage solutions with custom closet designs and installations.'
    },
    {
      icon: <Palette className="h-8 w-8 text-yellow-500" />,
      title: 'Design Consultation',
      description: 'Professional design services to bring your vision to life.'
    }
  ];

  return (
    <section id="services" className="py-16 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://d64gsuwffb70l.cloudfront.net/6831d35a3a358d8084fa52ab_1752169293190_36006064.jpeg')`
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            Our Services
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto font-body">
            From concept to completion, we deliver exceptional woodworking solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 border-gray-200">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-black font-display">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center font-body">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;