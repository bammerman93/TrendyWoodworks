import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const handleGetQuote = () => {
    window.location.href = 'mailto:rob@trendywoodworks.com?subject=Quote Request';
  };

  return (
    <header className="bg-white shadow-sm border-b border-yellow-500">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-3">
              <img 
                src="https://d64gsuwffb70l.cloudfront.net/6831d35a3a358d8084fa52ab_1752168573388_5a2e6d6b.png" 
                alt="Trendy Woodworks Logo" 
                className="h-12 w-auto"
              />
              <div className="text-2xl font-bold text-black font-display">
                Trendy Woodworks
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#hero" className="text-black hover:text-yellow-500 font-medium font-body transition-colors">Home</a>
            <a href="#services" className="text-black hover:text-yellow-500 font-medium font-body transition-colors">Services</a>
            <a href="#gallery" className="text-black hover:text-yellow-500 font-medium font-body transition-colors">Gallery</a>
            <a href="#about" className="text-black hover:text-yellow-500 font-medium font-body transition-colors">About</a>
            <a href="#contact" className="text-black hover:text-yellow-500 font-medium font-body transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-black">
                <Phone className="h-4 w-4 text-yellow-500" />
                <span className="font-body">405-255-7851</span>
              </div>
              <div className="flex items-center space-x-1 text-black">
                <Mail className="h-4 w-4 text-yellow-500" />
                <span className="font-body">rob@trendywoodworks.com</span>
              </div>
            </div>
            <Button 
              onClick={handleGetQuote}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-body font-semibold"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;