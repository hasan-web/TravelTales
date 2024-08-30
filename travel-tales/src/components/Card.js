import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Card = ({ city, image }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img src={image} alt={city} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{city}</h3>
        <Link to={`/location/${city}`} className="text-blue-500 hover:underline">
          Explore {city}
        </Link>
      </div>
    </motion.div>
  );
};

export default Card;
