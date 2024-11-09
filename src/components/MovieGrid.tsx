import React, { useState } from 'react';
import { Star, Clock } from 'lucide-react';
import BookingModal from './BookingModal';

const movies = [
  {
    id: 1,
    title: "Dune: Part Two",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=800",
    language: "English",
    format: "IMAX 3D",
    duration: "166min"
  },
  {
    id: 2,
    title: "Poor Things",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800",
    language: "English",
    format: "2D",
    duration: "141min"
  },
  {
    id: 3,
    title: "Bob Marley: One Love",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800",
    language: "English",
    format: "2D",
    duration: "147min"
  },
  {
    id: 4,
    title: "Madame Web",
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=800",
    language: "English",
    format: "3D",
    duration: "116min"
  },
  {
    id: 5,
    title: "Guntur Kaaram",
    rating: 4.6,
    image: "https://tse4.mm.bing.net/th?id=OIP.rrh5ZVKMroYPFWLbOC_THAHaKe&pid=Api&P=0&h=180auto=format&fit=crop&w=800",
    language: "Telugu",
    format: "2D",
    duration: "162min"
  },
  {
    id: 6,
    title: "HanuMan",
    rating: 4.7,
    image: "https://tse3.mm.bing.net/th?id=OIP.yPtJ-uYz5GQUvf45_MtpbQAAAA&pid=Api&P=0&h=180?auto=format&fit=crop&w=800",
    language: "Telugu",
    format: "3D",
    duration: "158min"
  },
  {
    id: 7,
    title: "Eagle",
    rating: 4.2,
    image: "https://tse4.mm.bing.net/th?id=OIP.xJfnjTzofxiOMilcMP12lwHaK2&pid=Api&P=0&h=180?auto=format&fit=crop&w=800",
    language: "Telugu",
    format: "2D",
    duration: "145min"
  },
  {
    id: 8,
    title: "Ooru Peru Bhairavakona",
    rating: 4.4,
    image: "https://tse4.mm.bing.net/th?id=OIP.Jqst8x8d1mZC-6ErnqAK6QHaJQ&pid=Api&P=0&h=180?auto=format&fit=crop&w=800",
    language: "Telugu",
    format: "2D",
    duration: "152min"
  }
];

export default function MovieGrid() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 pt-20">
      <h2 className="text-2xl font-bold mb-6">Recommended Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div key={movie.id} className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-[2/3] relative overflow-hidden">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">{movie.format}</p>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span>{movie.duration}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{movie.title}</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <Star className="text-yellow-400" size={16} />
                  <span className="ml-1">{movie.rating}/5</span>
                </div>
                <span>•</span>
                <span>{movie.language}</span>
              </div>
              <button
                onClick={() => setSelectedMovie(movie)}
                className="w-full mt-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Book tickets
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <BookingModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}