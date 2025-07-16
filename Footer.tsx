import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://d64gsuwffb70l.cloudfront.net/6831d35a3a358d8084fa52ab_1752169296454_11077efa.jpg')`
        }}
      ></div>
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-display text-yellow-500">Trendy Woodworks</h3>
            <p className="text-gray-300 mb-4 font-body">
              Crafting beautiful wooden furniture and custom cabinetry with passion and precision since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/trendycabinets" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 text-gray-300 hover:text-yellow-500 cursor-pointer transition-colors" />
              </a>
              <a href="https://www.instagram.com/trendywoodworks/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 text-gray-300 hover:text-yellow-500 cursor-pointer transition-colors" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 font-body">
              <li><a href="#hero" className="hover:text-yellow-500 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-yellow-500 transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-yellow-500 transition-colors">Gallery</a></li>
              <li><a href="#about" className="hover:text-yellow-500 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">Services</h4>
            <ul className="space-y-2 text-gray-300 font-body">
              <li><a href="#services" className="hover:text-yellow-500 transition-colors">Custom Cabinetry</a></li>
              <li><a href="#services" className="hover:text-yellow-500 transition-colors">Kitchen Design</a></li>
              <li><a href="#services" className="hover:text-yellow-500 transition-colors">Closet Systems</a></li>
              <li><a href="#services" className="hover:text-yellow-500 transition-colors">Built-in Furniture</a></li>
            </ul>
          </div>
          
          <div id="contact">
            <h4 className="text-lg font-semibold mb-4 font-display">Contact Info</h4>
            <div className="space-y-2 text-gray-300 font-body">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-500" />
                <span>405-255-7851</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-500" />
                <span>rob@trendywoodworks.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-yellow-500" />
                <span>Oklahoma</span>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-800" />
        
        <div className="text-center text-gray-300 font-body">
          <p>Copyright 2025 Trendy Woodworks. All Rights Reserved. Site Created by Hope City Creative Agency.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;