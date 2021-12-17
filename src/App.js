import { useState } from 'react';
import Header from './components/Header';
import ReviewList from './components/ReviewList';
import ReviewStats from './components/ReviewStats';
import ReviewForm from './components/ReviewForm';

// fake review data
import ReviewData from './data/ReviewData';

function App() {
  const [review, setReview] = useState(ReviewData);

  const deleteReview = id => {
    if (window.confirm('Are you sure you want to delete review?')) {
      setReview(review.filter(item => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className='container'>
        <ReviewForm />
        <ReviewStats review={review} />
        <ReviewList review={review} handleDelete={deleteReview} />
      </div>
    </>
  );
}

export default App;
