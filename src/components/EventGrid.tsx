import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const events = {
  plays: [
    {
      id: 1,
      title: "Romeo and Juliet",
      image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800",
      date: "2024-03-15",
      time: "7:00 PM",
      venue: "National Theatre",
      price: "₹1500"
    },
    {
      id: 2,
      title: "The Glass Menagerie",
      image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=800",
      date: "2024-03-20",
      time: "6:30 PM",
      venue: "City Playhouse",
      price: "₹1200"
    }
  ],
  sports: [
    {
      id: 1,
      title: "IPL 2024: MI vs CSK",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800",
      date: "2024-03-25",
      time: "8:00 PM",
      venue: "Wankhede Stadium",
      price: "₹2000"
    },
    {
      id: 2,
      title: "Pro Kabaddi League Finals",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800",
      date: "2024-03-30",
      time: "7:00 PM",
      venue: "Netaji Indoor Stadium",
      price: "₹800"
    }
  ],
  concerts: [
    {
      id: 1,
      title: "A.R. Rahman Live",
      image: "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=800",
      date: "2024-04-05",
      time: "7:30 PM",
      venue: "DY Patil Stadium",
      price: "₹2500"
    },
    {
      id: 2,
      title: "Arijit Singh Concert",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800",
      date: "2024-04-10",
      time: "8:00 PM",
      venue: "NSCI Dome",
      price: "₹3000"
    }
  ]
};

export default function EventGrid({ category }) {
  const categoryEvents = events[category] || [];

  return (
    <div className="max-w-7xl mx-auto px-4 pt-20">
      <h2 className="text-2xl font-bold mb-6 capitalize">{category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categoryEvents.map((event) => (
          <div key={event.id} className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-[16/9] relative overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>{event.venue}</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-bold text-lg">{event.price}</span>
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}