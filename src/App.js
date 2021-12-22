import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
// components
import Header from './components/Header';
import ReviewForm from './components/ReviewForm';
import ReviewStats from './components/ReviewStats';
import ReviewList from './components/ReviewList';
import AboutPage from './components/pages/AboutPage';
import AboutLink from './components/AboutLink';
// context
import { ReviewProvider } from './context/ReviewContext';
// data
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
    <ReviewProvider>
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
                  <ReviewStats />
                  <ReviewList handleDelete={deleteReview} />
                </>
              }></Route>

            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <AboutLink />
        </div>
      </Router>
    </ReviewProvider>
  );
}

export default App;
