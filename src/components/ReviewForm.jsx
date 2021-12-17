import { useState } from 'react';
import Card from './shared/Card';

function ReviewForm() {
  const [text, setText] = useState('');

  const handleTextChange = e => {
    setText(e.target.value);
  };

  const btnStyles = {
    backgroundColor: 'var(--orange-color)',
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
          <button type='submit' className='btn btn-primary' style={btnStyles}>
            Post
          </button>
        </div>
      </form>
    </Card>
  );
}

export default ReviewForm;
