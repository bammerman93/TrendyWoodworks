import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Gallery from './Gallery';
import Services from './Services';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <section id="about" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-display">
                About Trendy Woodworks
              </h2>
              <p className="text-lg text-gray-700 mb-8 font-body">
                Since 2015, we've been crafting beautiful wooden furniture and custom cabinetry with passion and precision. 
                Our team of skilled craftsmen combines traditional woodworking techniques with modern design to create 
                pieces that are both functional and beautiful.
              </p>
              <p className="text-lg text-gray-700 font-body">
                From custom kitchen cabinets to built-in furniture, we work closely with our clients to bring their 
                vision to life. Every project is unique, and we take pride in delivering exceptional quality and 
                personalized service.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;