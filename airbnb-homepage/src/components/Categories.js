import React, { useState } from 'react';
import './Categories.css';

const categories = ['Beachfront', 'Cabins', 'Trending', 'Luxury', 'Unique Stays'];

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <button
          key={index}
          className={activeCategory === category ? 'active' : ''}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;