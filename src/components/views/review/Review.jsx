import React, {useState, useEffect} from 'react';
import StarRating from '../../partials/shared/starRating/StarRating';
import reviewImage from '../../../assets/images/Review.Bild.png'


function Review() {
  const [rating, setRating] = useState(0.0); // Uppdatera state-variabeln till en double
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/reviews', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        rating: parseFloat(rating), // Uppdatera form-data med parseFloat för att lägga till decimaler
        comment: comment
      })
    })
    .then( response => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
  }
  
  useEffect(() => {
    fetch('http://localhost:3000/reviews')
    .then(response => response.json())
    .then((data) => {
      setReviews(data);
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <div className="review-container">
      <h2>Leave a review</h2>
       { <img src={reviewImage} alt="Review" /> }
      <h2>Please rate the quality of service for the order!</h2>
      <form onSubmit={handleSubmit}>
        <div className="rating-container">
          <div className="star-rating-container">
            <StarRating rating={rating} onRatingChange={setRating} />
          </div>          
        </div>
        <div>
            <p>Your comments and suggestions help us improve the service quality better!</p>
        </div>
        <div className="comment-container">
          <textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)}placeholder='Enter your comment'/>
        </div>
        <button type="submit">Send review</button>
      </form>
      <div className="reviews-container">
        {reviews.map((review) => (
          <div key={review.id}>
            <p>Rating: {review.rating.toFixed(1)}</p> {/* Använd toFixed för att visa rating med en decimal */}
            <p>Comment: {review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;