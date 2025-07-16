import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://d64gsuwffb70l.cloudfront.net/6831d35a3a358d8084fa52ab_1752169291136_b603a1e1.jpeg')`
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-display">
            Trendy Woodworks
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 font-body">
            Handcrafted wooden furniture and decor for modern living
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;