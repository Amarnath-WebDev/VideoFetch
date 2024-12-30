import React from 'react';
import { Github, Twitter, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-red-500" />
            <span className="text-sm text-gray-600">Made with love for video enthusiasts</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-600 hover:text-blue-500 transition-colors">
              <Github className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-500 transition-colors">
              <Twitter className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}