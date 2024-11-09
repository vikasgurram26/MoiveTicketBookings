import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MovieGrid from './components/MovieGrid';
import EventGrid from './components/EventGrid';

function App() {
  const [activeCategory, setActiveCategory] = useState('movies');

  const renderContent = () => {
    if (activeCategory === 'movies') {
      return <MovieGrid />;
    }
    return <EventGrid category={activeCategory} />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        <main className="flex-1 lg:ml-64">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;