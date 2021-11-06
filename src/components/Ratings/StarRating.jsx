import React, { useState } from "react";

import Star from "./Star";

const createArray = (length) => [...Array(length)];

const StarRating = (props) => {
  const [selectedStars, setSelectedStars] = useState(0);
  const { totalStars } = props;
  console.log(props);

  return (
    <div style={{ display: "flex", ...props.style }}>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} out of {totalStars}.
      </p>
    </div>
  );
};

export default StarRating;
