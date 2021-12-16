import ReviewItem from "./ReviewItem";

function ReviewList({ review }) {
  if (!review || review.length === 0) {
    return <p>No Reviews Yet</p>;
  }
  return (
    <div className='review-list'>
      {review.map(item => (
        <ReviewItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ReviewList;
