import { useContext } from 'react';
import ReviewContext from '../context/ReviewContext';

function ReviewStats() {
  const { reviews } = useContext(ReviewContext);

  // NOTES: simplified calculation
  const avgRating = Math.round(
    reviews.reduce((acc, { rating }) => acc + rating, 0) / reviews.length
  );

  return (
    <div className='review-stats'>
      <p className='avg'>
        <span className='avg'>Reviews: </span>
        {reviews.length} <span className='avg'>Avg Rating: </span>
        {isNaN(avgRating) ? 0 : avgRating}{' '}
      </p>
    </div>
  );
}

export default ReviewStats;
