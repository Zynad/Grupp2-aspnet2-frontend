import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StarRating from '../../partials/shared/starRating/StarRating';
import '..//..//assets/styles/application'
import reviewImage from '../../../assets/images/Review.Bild.png';

function Review() {
  const [rating, setRating] = useState(0.0); // Uppdatera state-variabeln till en double
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/reviews', {
      rating: parseFloat(rating), // Uppdatera form-data med parseFloat för att lägga till decimaler
      comment: comment
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  useEffect(() => {
    axios.get('http://localhost:3000/reviews')
    .then((response) => {
      setReviews(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <div className="review-container">
       <img src={reviewImage} alt="Review" />
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
          <textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)} />
        </div>
        <button type="submit">Send review</button>
      </form>
      <div className="reviews-container">
        <h2>Reviews</h2>
        {reviews.map((review) => (
          <div key={review.id}>
            <p>Betyg: {review.rating.toFixed(1)}</p> {/* Använd toFixed för att visa rating med en decimal */}
            <p>Kommentar: {review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;