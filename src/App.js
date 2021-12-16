import { useState } from 'react';
import Header from './components/Header';
import ReviewList from './components/ReviewList';
import ReviewData from './data/ReviewData';

function App() {
  const [review, setReview] = useState(ReviewData);

  return (
    <>
      <Header />
      <div className='container'>
        <ReviewList review={review} />
      </div>
    </>
  );
}

export default App;
