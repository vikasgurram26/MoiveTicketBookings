import React from 'react';
import { Film, Theater, Music, Ticket, Calendar } from 'lucide-react';

export default function Sidebar({ activeCategory, onCategoryChange }) {
  const categories = [
    { id: 'movies', name: 'Movies', icon: Film },
    { id: 'plays', name: 'Plays', icon: Theater },
    { id: 'sports', name: 'Sports', icon: Ticket },
    { id: 'concerts', name: 'Concerts', icon: Music },
  ];

  return (
    <div className="hidden lg:block fixed left-0 top-16 h-full w-64 bg-white shadow-lg">
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors ${
                  activeCategory === category.id
                    ? 'bg-red-50 text-red-600'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <Icon size={20} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}