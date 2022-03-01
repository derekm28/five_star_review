import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './styles.css';

const RatingSystem = () => {

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className='star-rating'>
      <h1>5 star rating system</h1>
      <h2>Select a rating:</h2>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return <label>
          <input
            type="radio"
            name="rating"
            value={index}
            onClick={() => setRating(index, null)}
          />

          <FaStar size={25}
            className="star"
            alt="empty star"
            color={index <= (hover || rating) ? '#000000' : '#d1d2cb'}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)} />
        </label>


      })}
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <RatingSystem />
    </div>
  )
};
