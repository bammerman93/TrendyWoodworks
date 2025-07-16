import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Gallery: React.FC = () => {
  const galleryImages = [
    {
      id: 1,
      url: 'https://d64gsuwffb70l.cloudfront.net/6831d35a3a358d8084fa52ab_1752169538712_4da125c1.jpg',
      title: 'Modern Kitchen Island',
      description: 'Custom kitchen island with premium finishes'
    },
    {
      id: 2,
      url: 'https://d64gsuwffb70l.cloudfront.net/6831d35a3a358d8084fa52ab_1752169539751_d79d0b79.jpg',
      title: 'Elegant Kitchen Design',
      description: 'White cabinetry with gold accents and custom range hood'
    },
    {
      id: 3,
      url: 'https://d64gsuwffb70l.cloudfront.net/6831d35a3a358d8084fa52ab_1752169540194_22b49096.jpg',
      title: 'Stone Fireplace Feature',
      description: 'Custom stone fireplace with wooden mantel'
    },
    {
      id: 4,
      url: 'https://d64gsuwffb70l.cloudfront.net/6831d35a3a358d8084fa52ab_1752169540511_459ea5ac.jpg',
      title: 'Custom Cabinet Doors',
      description: 'Handcrafted cabinet doors with glass panels'
    },
    {
      id: 5,
      url: 'https://d64gsuwffb70l.cloudfront.net/6831d35a3a358d8084fa52ab_1752169540853_8e2fbc58.jpg',
      title: 'Kitchen Range Hood',
      description: 'Custom designed range hood with wood accents'
    },
    {
      id: 6,
      url: 'https://d64gsuwffb70l.cloudfront.net/6831d35a3a358d8084fa52ab_1752169541193_0c8e65b2.jpg',
      title: 'Dining Table Set',
      description: 'Custom dining table with matching chairs'
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            Our Work Gallery
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-body">
            Explore our portfolio of custom woodworking projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <Card key={image.id} className="hover:shadow-xl transition-all duration-300 bg-gray-900 border-gray-700 overflow-hidden group">
              <CardContent className="p-0">
                <div className="aspect-square bg-gray-800 overflow-hidden">
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2 font-display">{image.title}</h3>
                  <p className="text-gray-300 text-sm font-body">{image.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;