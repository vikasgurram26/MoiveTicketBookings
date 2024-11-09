import React, { useState } from 'react';
import { Search, Menu, X, MapPin } from 'lucide-react';
import SignupModal from './SignupModal';
import SigninModal from './SigninModal';

const INDIAN_CITIES = [
  'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata',
  'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState('Mumbai');
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showSigninModal, setShowSigninModal] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-red-600">MovieTix</span>
              <div className="hidden md:flex items-center ml-8 space-x-4">
                <div className="relative">
                  <button
                    className="flex items-center space-x-1 text-gray-700 hover:text-red-600"
                    onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                  >
                    <MapPin size={18} />
                    <span>{location}</span>
                  </button>
                  
                  {showLocationDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
                      {INDIAN_CITIES.map((city) => (
                        <button
                          key={city}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={() => {
                            setLocation(city);
                            setShowLocationDropdown(false);
                          }}
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search movies, events, plays..."
                  className="w-96 px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button 
                className="px-4 py-2 text-gray-700 hover:text-red-600"
                onClick={() => setShowSigninModal(true)}
              >
                Sign In
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                onClick={() => setShowSignupModal(true)}
              >
                Sign Up
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="relative mx-4 my-2">
                <input
                  type="text"
                  placeholder="Search movies..."
                  className="w-full px-4 py-2 rounded-lg bg-gray-100"
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
              <button
                className="block w-full px-4 py-2 text-left text-gray-700"
                onClick={() => setShowLocationDropdown(!showLocationDropdown)}
              >
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2" />
                  {location}
                </div>
              </button>
              <button 
                className="block w-full px-4 py-2 text-left text-gray-700"
                onClick={() => setShowSigninModal(true)}
              >
                Sign In
              </button>
              <button
                className="block w-full px-4 py-2 text-left text-gray-700"
                onClick={() => setShowSignupModal(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>

      {showSignupModal && <SignupModal onClose={() => setShowSignupModal(false)} />}
      {showSigninModal && <SigninModal onClose={() => setShowSigninModal(false)} />}
    </>
  );
}