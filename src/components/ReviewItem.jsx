import { useState } from 'react';

function ReviewItem() {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState('This is an example of a Review Item');

  return (
    <div className='card'>
      <div className='num-display'>{rating}</div>
      <div className='text-display'>{text}</div>
    </div>
  );
}

export default ReviewItem;
