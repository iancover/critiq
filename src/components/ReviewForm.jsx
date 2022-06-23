import { useState, useContext, useEffect } from 'react';
// components
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
// context
import ReviewContext from '../context/ReviewContext';

function ReviewForm() {
  const [rating, setRating] = useState(10);
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const { addReview, reviewEdit, updateReview } = useContext(ReviewContext);

  useEffect(() => {
    if (reviewEdit.edit === true) {
      setBtnDisabled(false);
      setRating(reviewEdit.item.rating);
      setText(reviewEdit.item.text);
    }
  }, [reviewEdit]);

  const handleTextChange = ({ target: { value } }) => {
    if (value === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (value.trim().length < 20) {
      setMessage('Text must be at least 20 characters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 20) {
      const newReview = { text, rating };

      if (reviewEdit.edit === true) {
        updateReview(reviewEdit.item.id, newReview);
      } else {
        addReview(newReview);
      }
      setBtnDisabled(true);
      setRating(10);
      setText('');
    }
  };

  // pass selected rating to RatingSelect to avoid local duplicate state
  return (
    <Card reverse={true}>
      <form onSubmit={handleSubmit}>
        <h2>Select Rating & Write Review:</h2>
        <RatingSelect selectRating={setRating} selectedRating={rating} />
        <div className='input-group'>
          <textarea
            onChange={handleTextChange}
            type='text'
            placeholder='Enter text...'
            value={text}
            minLength={'10'}
            maxLength={'600'}
            autoCapitalize={'sentences'}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Post
          </Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
}

export default ReviewForm;
