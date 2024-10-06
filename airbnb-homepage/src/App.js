import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import ListingCard from './components/ListingCard';
import Footer from './components/Footer';
import './App.css';

const mockListings = [
  {
    image: 'https://example.com/listing1.jpg',
    title: 'Beautiful Beachfront Home',
    type: 'Entire home',
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    price: 250,
    rating: 4.9,
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <Categories />
      <div className="listing-container">
        {mockListings.map((listing, index) => (
          <ListingCard key={index} {...listing} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
