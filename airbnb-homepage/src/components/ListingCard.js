import React from 'react';
import './ListingCard.css';

const ListingCard = ({ image, title, type, guests, bedrooms, bathrooms, price, rating }) => {
  return (
    <div className="listing-card">
      <img src={image} alt={title} />
      <div className="listing-details">
        <h2>{title}</h2>
        <p>{type} · {guests} guests · {bedrooms} bedrooms · {bathrooms} bathrooms</p>
        <p>${price}/night</p>
        <p>Rating: {rating}</p>
      </div>
    </div>
  );
};

export default ListingCard;