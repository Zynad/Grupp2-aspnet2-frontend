import React, { useState } from 'react';

const StarRating = ({ rating, numberOfReviews, onStarClick }) => {
  const [selectedRating, setSelectedRating] = useState(rating);

  const handleStarClick = (selectedRating) => {
    setSelectedRating(selectedRating);
    if (onStarClick) {
      onStarClick(selectedRating);
    }
  };

  const stars = Array.from({ length: 5 }, (_, index) => (
    <i
      key={index}
      className={`fa-sharp fa-star ${
        index < selectedRating ? "fa-solid" : "fa-regular"
      }`}
      onClick={() => handleStarClick(index + 1)}
    ></i>
  ));

  if (numberOfReviews != null)
    return (
      <div className="star-rating">
        {stars} ({numberOfReviews})
      </div>
    );

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
