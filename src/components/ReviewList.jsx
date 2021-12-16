import ReviewItem from './ReviewItem';
import PropTypes from 'prop-types';

function ReviewList({ review }) {
  if (!review || review.length === 0) {
    return <p>No Reviews Yet</p>;
  }
  return (
    <div className='review-list'>
      {review.map(item => (
        <ReviewItem key={item.id} item={item} handleDelete={id => console.log(id)} />
      ))}
    </div>
  );
}

ReviewList.propTypes = {
  review: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default ReviewList;
