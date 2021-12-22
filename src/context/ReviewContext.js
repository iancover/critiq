import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// data
import ReviewData from '../data/ReviewData';

// init context obj
const ReviewContext = createContext();

// create provider
export const ReviewProvider = ({ children }) => {
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
    <ReviewContext.Provider
      value={{
        review,
        addReview,
        deleteReview,
      }}>
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewContext;
