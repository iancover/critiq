import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function ReviewForm({ handleAdd }) {
  const [rating, setRating] = useState(10);
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = e => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 50) {
      setMessage('Text must be at least 50 characters');
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim().length > 50) {
      const newReview = {
        text,
        rating,
      };

      handleAdd(newReview);
      setText('');
    }
  };

  return (
    <Card reverse={true}>
      <form onSubmit={handleSubmit}>
        <h2>Select Rating & Write Review:</h2>
        <RatingSelect selectRating={rating => setRating(rating)} />
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
