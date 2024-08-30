import React, { useState, useEffect } from 'react';
import locationsData from '../data/locations.json';
import Card from '../components/Card';

const Home = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    setLocations(locationsData.locations);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Explore Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations.map((location) => (
          <Card key={location.city} city={location.city} image={`/assets/${location.images[0]}`} />
        ))}
      </div>
    </div>
  );
};

export default Home;
