import React from 'react';
import AppLayout from '@/components/AppLayout';

const GalleryPage: React.FC = () => {
  const galleryImages = [
    {
      src: 'https://d64gsuwffb70l.cloudfront.net/6831d35a3a358d8084fa52ab_1752169291136_b603a1e1.jpeg',
      title: 'Custom Kitchen Island',
      description: 'Handcrafted kitchen island with premium wood finish'
    },
    {
      src: 'https://d64gsuwffb70l.cloudfront.net/6831d35a3a358d8084fa52ab_1752169291136_b603a1e1.jpeg',
      title: 'Built-in Cabinetry',
      description: 'Seamless integration with modern design elements'
    },
    {
      src: 'https://d64gsuwffb70l.cloudfront.net/6831d35a3a358d8084fa52ab_1752169291136_b603a1e1.jpeg',
      title: 'Fireplace Feature Wall',
      description: 'Custom woodwork surrounding fireplace installation'
    },
    {
      src: 'https://d64gsuwffb70l.cloudfront.net/6831d35a3a358d8084fa52ab_1752169291136_b603a1e1.jpeg',
      title: 'Cabinet Door Details',
      description: 'Precision craftsmanship in every detail'
    },
    {
      src: 'https://d64gsuwffb70l.cloudfront.net/6831d35a3a358d8084fa52ab_1752169291136_b603a1e1.jpeg',
      title: 'Custom Range Hood',
      description: 'Elegant wooden range hood with modern functionality'
    },
    {
      src: 'https://d64gsuwffb70l.cloudfront.net/6831d35a3a358d8084fa52ab_1752169291136_b603a1e1.jpeg',
      title: 'Dining Room Furniture',
      description: 'Handcrafted dining table and matching pieces'
    },
    {
      src: 'https://d64gsuwffb70l.cloudfront.net/6831d35a3a358d8084fa52ab_1752169291136_b603a1e1.jpeg',
      title: 'Custom Shelving',
      description: 'Built-in shelving solutions for any space'
    }
  ];

  return (
    <AppLayout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 font-display">
              Our Work Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
              Explore our portfolio of custom woodworking projects and craftsmanship
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2 font-display">{image.title}</h3>
                  <p className="text-gray-600 font-body">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default GalleryPage;