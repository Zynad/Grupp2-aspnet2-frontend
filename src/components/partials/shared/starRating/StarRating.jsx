import React from 'react'

const StarRating = ({rating, numberOfReviews}) => {
    const stars = Array.from({length: 5}, (_, index) => (
        <i key={index} className={`fa-sharp fa-star ${index < rating ? "fa-solid" : "fa-regular"}`}></i>
    ))
    numberOfReviews = "(3)"    
    return (
        <div className="star-rating">{stars}{numberOfReviews}</div>
  )
}

export default StarRating