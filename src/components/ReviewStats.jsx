import { useContext } from 'react';
import ReviewContext from '../context/ReviewContext';

function ReviewStats() {
  const { review } = useContext(ReviewContext);

  let avgRating = review.reduce((acc, curr) => acc + curr.rating, 0) / review.length;
  avgRating = avgRating.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className='review-stats'>
      <p className='avg'>
        <span className='avg'>Reviews: </span>
        {review.length} <span className='avg'>Avg Rating: </span>
        {isNaN(avgRating) ? 0 : avgRating}{' '}
      </p>
    </div>
  );
}

export default ReviewStats;
