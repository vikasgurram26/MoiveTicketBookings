import React, { useState } from 'react';
import { X, Clock } from 'lucide-react';

const SEAT_PRICE = 250; // Price in INR
const PREMIUM_SEAT_PRICE = 350;

const SHOW_TIMES = [
  '10:30 AM', '1:15 PM', '4:30 PM', '7:45 PM', '10:30 PM'
];

export default function BookingModal({ movie, onClose }) {
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatType, setSeatType] = useState('regular');

  const generateSeats = (rows, cols) => {
    return Array.from({ length: rows }, (_, rowIndex) => 
      Array.from({ length: cols }, (_, colIndex) => ({
        id: `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`,
        type: rowIndex < 2 ? 'premium' : 'regular',
        isBooked: Math.random() < 0.3
      }))
    );
  };

  const seats = generateSeats(8, 10);
  
  const toggleSeat = (seatId) => {
    setSelectedSeats(prev => 
      prev.includes(seatId)
        ? prev.filter(id => id !== seatId)
        : [...prev, seatId]
    );
  };

  const calculateTotal = () => {
    return selectedSeats.reduce((total, seatId) => {
      const row = seatId.charAt(0);
      return total + (row < 'C' ? PREMIUM_SEAT_PRICE : SEAT_PRICE);
    }, 0);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">{movie.title}</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X size={24} />
            </button>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Select Show Time</h3>
            <div className="flex flex-wrap gap-3">
              {SHOW_TIMES.map(time => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-4 py-2 rounded-lg border ${
                    selectedTime === time
                      ? 'bg-red-600 text-white border-red-600'
                      : 'border-gray-300 hover:border-red-600'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span>{time}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {selectedTime && (
            <>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Select Seats</h3>
                <div className="flex justify-center mb-4">
                  <div className="flex space-x-4 text-sm">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-gray-200 rounded mr-2"></div>
                      <span>Available</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-red-600 rounded mr-2"></div>
                      <span>Selected</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-gray-400 rounded mr-2"></div>
                      <span>Booked</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-2">
                  {seats.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex space-x-2">
                      <span className="w-6 text-center">{String.fromCharCode(65 + rowIndex)}</span>
                      {row.map((seat) => (
                        <button
                          key={seat.id}
                          disabled={seat.isBooked}
                          onClick={() => toggleSeat(seat.id)}
                          className={`w-8 h-8 rounded ${
                            seat.isBooked
                              ? 'bg-gray-400 cursor-not-allowed'
                              : selectedSeats.includes(seat.id)
                              ? 'bg-red-600 text-white'
                              : 'bg-gray-200 hover:bg-gray-300'
                          }`}
                        >
                          {seat.id.substring(1)}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="font-semibold">Selected Seats: {selectedSeats.join(', ') || 'None'}</p>
                    <p className="text-sm text-gray-600">
                      Premium: ₹{PREMIUM_SEAT_PRICE} | Regular: ₹{SEAT_PRICE}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">Total: ₹{calculateTotal()}</p>
                    <p className="text-sm text-gray-600">Including all taxes</p>
                  </div>
                </div>
                <button
                  disabled={selectedSeats.length === 0}
                  className={`w-full py-3 rounded-lg ${
                    selectedSeats.length === 0
                      ? 'bg-gray-300 cursor-not-allowed'
                      : 'bg-red-600 hover:bg-red-700 text-white'
                  }`}
                >
                  Proceed to Pay ₹{calculateTotal()}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}