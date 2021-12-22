import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Header from './components/Header';
import ReviewList from './components/ReviewList';
import ReviewStats from './components/ReviewStats';
import ReviewForm from './components/ReviewForm';
import AboutLink from './components/AboutLink';
import AboutPage from './components/pages/AboutPage';

// fake data
import ReviewData from './data/ReviewData';

function App() {
  const [review, setReview] = useState(ReviewData);

  const addReview = newReview => {
    newReview.id = uuidv4();
    setReview([newReview, ...review]);
  };

  const deleteReview = id => {
    window.confirm('Permanently delete review?') &&
      setReview(review.filter(item => item.id !== id));
  };

  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <ReviewForm handleAdd={addReview} />
                <ReviewStats review={review} />
                <ReviewList review={review} handleDelete={deleteReview} />
              </>
            }></Route>

          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <AboutLink />
      </div>
    </Router>
  );
}

export default App;
