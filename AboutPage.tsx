import React from 'react';
import AppLayout from '@/components/AppLayout';

const AboutPage: React.FC = () => {
  return (
    <AppLayout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 font-display">
                About Trendy Woodworks
              </h1>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <img 
                    src="https://d64gsuwffb70l.cloudfront.net/6831d35a3a358d8084fa52ab_1752169291136_b603a1e1.jpeg" 
                    alt="Rob Ybanez, Owner of Trendy Woodworks"
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-black mb-4 font-display">Meet Rob Ybanez</h2>
                  <p className="text-gray-600 font-body text-lg leading-relaxed">
                    Owner and master craftsman behind Trendy Woodworks, Rob brings years of experience 
                    and passion for woodworking to every project. His dedication to quality and attention 
                    to detail ensures that each piece is crafted to perfection.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-black mb-6 font-display text-center">
                OUR MISSION
              </h2>
              <div className="space-y-6 text-gray-700 font-body text-lg leading-relaxed">
                <p>
                  Our mission is to craft timeless spaces that reflect the unique essence of our clients. 
                  We are dedicated to merging the artistry of woodworking with innovative design, creating 
                  bespoke cabinetry that transcends mere functionality to become a defining element of home aesthetics.
                </p>
                <p>
                  Driven by a passion for excellence, we aim to redefine the standard of craftsmanship in 
                  every project we undertake. Our commitment to precision, quality materials, and personalized 
                  design ensures that each piece of cabinetry we create is not just furniture but a testament 
                  to the seamless fusion of art and functionality.
                </p>
                <p>
                  As stewards of timeless traditions and agents of modern innovation, we seek to inspire 
                  spaces that stand the test of time. Our mission is to empower individuals to express their 
                  individuality through custom cabinetry, transforming houses into homes that tell unique stories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default AboutPage;