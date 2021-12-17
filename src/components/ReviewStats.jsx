import PropTypes from 'prop-types';

function ReviewStats({ review }) {
  let avgRating = review.reduce((acc, curr) => acc + curr.rating, 0) / review.length;

  avgRating = avgRating.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className='review-stats'>
      <p className='avg'>
        <span className='avg'>Reviews: </span>{review.length}{' '}
        <span className='avg'>Avg Rating: </span>{isNaN(avgRating) ? 0 : avgRating}{' '}
      </p>
    </div>
  );
}

ReviewStats.propTypes = {
  review: PropTypes.array.isRequired,
};

export default ReviewStats;
