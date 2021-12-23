import { useContext } from 'react';
import ReviewContext from '../context/ReviewContext';

function ReviewStats() {
  const { reviews } = useContext(ReviewContext);

  let avgRating = reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length;
  avgRating = avgRating.toFixed(1).replace(/[.,]0$/, '');

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
