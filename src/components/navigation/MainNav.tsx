import React from 'react';
import { Search } from 'lucide-react';

export function MainNav() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16 justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-blue-600">VideoFetch</h1>
          </div>
          
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Search videos..."
                className="w-full px-4 py-2 rounded-full border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 pl-10"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}