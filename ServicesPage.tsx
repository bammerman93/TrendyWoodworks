import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wrench, Home, Box, Lightbulb } from 'lucide-react';
import AppLayout from '@/components/AppLayout';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Box className="h-8 w-8 text-yellow-500" />,
      title: "Custom Cabinetry",
      description: "Handcrafted kitchen and bathroom cabinets tailored to your space and style preferences.",
      features: ["Kitchen Cabinets", "Bathroom Vanities", "Storage Solutions", "Custom Hardware"]
    },
    {
      icon: <Home className="h-8 w-8 text-yellow-500" />,
      title: "Built-in Furniture",
      description: "Seamlessly integrated furniture pieces that maximize space and enhance functionality.",
      features: ["Built-in Shelving", "Entertainment Centers", "Window Seats", "Room Dividers"]
    },
    {
      icon: <Wrench className="h-8 w-8 text-yellow-500" />,
      title: "Closet Systems",
      description: "Organized storage solutions designed to optimize your closet space efficiently.",
      features: ["Walk-in Closets", "Reach-in Closets", "Pantry Organization", "Custom Shelving"]
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
      title: "Design Consultation",
      description: "Professional design guidance to bring your vision to life with expert craftsmanship.",
      features: ["Space Planning", "Material Selection", "3D Renderings", "Project Management"]
    }
  ];

  return (
    <AppLayout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 font-display">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
              Discover our comprehensive range of custom woodworking services designed to transform your space
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    {service.icon}
                    <CardTitle className="text-2xl font-display">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 font-body text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="font-body">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-body font-semibold">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ServicesPage;