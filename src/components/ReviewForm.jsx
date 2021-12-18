import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function ReviewForm() {
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

  return (
    <Card reverse={true}>
      <form>
        <h2>Select Rating & Write Review:</h2>
        <RatingSelect selectRating={rating => setRating(rating)} />
        <div className='input-group'>
          <textarea
            onChange={handleTextChange}
            type='text'
            placeholder='Enter text...'
            value={text}
            minLength={'50'}
            maxLength={'250'}
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
