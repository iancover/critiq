import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

// data
// import ReviewData from '../data/ReviewData';

// init context obj
const ReviewContext = createContext();

// create provider
export const ReviewProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReview] = useState([]);
  const [reviewEdit, setReviewEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchReviews();
  }, [])

  const fetchReviews = async () => {
    const res = await fetch(`http://localhost:5000/reviews?_sort=id&_order=desc`);
    const data = await res.json();
    setReview(data);
    setInterval(() => setIsLoading(false), 1000);
  }

  const addReview = newReview => {
    newReview.id = uuidv4();
    setReview([newReview, ...reviews]);
  };

  const deleteReview = id => {
    window.confirm('Permanently delete review?') &&
      setReview(reviews.filter(item => item.id !== id));
  };

  const editReview = item => {
    setReviewEdit({
      item,
      edit: true,
    });
  };

  const updateReview = (id, updItem) => {
    setReview(reviews.map(item => (item.id === id ? { ...item, ...updItem } : item)));
  };

  return (
    <ReviewContext.Provider
      value={{
        reviews,
        reviewEdit,
        isLoading,
        addReview,
        deleteReview,
        editReview,
        updateReview,
      }}>
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewContext;
