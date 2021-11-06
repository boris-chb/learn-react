import React from "react";

import Star from "./Star";

const createArray = (length) => [...Array(length)];

const StarRating = ({ totalStars = 5, selectedStars = 0, onRate }) => {
  return (
    <div className="star-rating">
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStars} out of {totalStars}.
      </p>
    </div>
  );
};

export default StarRating;
