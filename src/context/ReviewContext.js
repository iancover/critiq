import { createContext, useState, useEffect } from 'react';

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
  }, []);

  const fetchReviews = async () => {
    const res = await fetch(`/reviews?_sort=id&_order=desc`);
    // package.json > proxy: http://localhost:5000
    const data = await res.json();
    setReview(data);
    setInterval(() => setIsLoading(false), 1000);
  };

  const addReview = async newReview => {
    const response = await fetch('/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newReview),
    });
    const data = await response.json();
    setReview([data, ...reviews]);
  };

  const deleteReview = async id => {
    if (window.confirm('Permanently delete review?')) {
      await fetch(`/reviews/${id}`, { method: 'DELETE' });
      setReview(reviews.filter(item => item.id !== id));
    }
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
