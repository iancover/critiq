import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

function ReviewForm() {
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
        <h2>Write your review:</h2>
        {/* @toto - rating select component */}
        <div className='input-group'>
          <textarea
            onChange={handleTextChange}
            type='text'
            placeholder='Type here...'
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
