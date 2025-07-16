import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProductGrid: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Custom Closet System',
      price: '$2,899',
      image: 'https://d64gsuwffb70l.cloudfront.net/6831d35a3a358d8084fa52ab_1752169285568_d5d1c221.jpeg',
      category: 'Storage',
      featured: true
    },
    {
      id: 2,
      name: 'Entertainment Center',
      price: '$1,449',
      image: 'https://d64gsuwffb70l.cloudfront.net/6831d35a3a358d8084fa52ab_1752169288585_0b39e161.jpeg',
      category: 'Furniture'
    },
    {
      id: 3,
      name: 'Traditional Kitchen',
      price: '$8,999',
      image: 'https://d64gsuwffb70l.cloudfront.net/6831d35a3a358d8084fa52ab_1752169289687_96f58ceb.jpg',
      category: 'Cabinetry'
    },
    {
      id: 4,
      name: 'Luxury Kitchen Island',
      price: '$4,299',
      image: 'https://d64gsuwffb70l.cloudfront.net/6831d35a3a358d8084fa52ab_1752169293190_36006064.jpeg',
      category: 'Cabinetry'
    }
  ];

  return (
    <section className="py-16 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('https://d64gsuwffb70l.cloudfront.net/6831d35a3a358d8084fa52ab_1752169295216_c8e9e804.png')`
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-display">
            Featured Products
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-body">
            Discover our handpicked selection of premium wooden furniture and cabinetry
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow border-gray-200 bg-white/90 backdrop-blur-sm">
              <CardHeader className="p-0">
                <div className="aspect-square bg-gray-50 rounded-t-lg overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg text-black font-display">{product.name}</CardTitle>
                  {product.featured && <Badge className="bg-yellow-100 text-black border-yellow-500">Featured</Badge>}
                </div>
                <p className="text-sm text-gray-600 mb-2 font-body">{product.category}</p>
                <p className="text-xl font-bold text-black font-body">{product.price}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-body font-semibold">
                  Get Quote
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;