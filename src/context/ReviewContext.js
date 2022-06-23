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
    // package.json > proxy: http://localhost:5000
    const res = await fetch(`/reviews?_sort=id&_order=desc`);
    const data = await res.json();
    setReview(data);
    setIsLoading(false);
  };

  const addReview = async (newReview) => {
    const res = await fetch('/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newReview),
    });
    const data = await res.json();
    setReview([data, ...reviews]);
  };

  const deleteReview = async (id) => {
    if (window.confirm('Permanently delete review?')) {
      await fetch(`/reviews/${id}`, { method: 'DELETE' });
      setReview(reviews.filter((item) => item.id !== id));
    }
  };

  const editReview = (item) => {
    setReviewEdit({
      item,
      edit: true,
    });
  };

  const updateReview = async (id, updItem) => {
    const res = await fetch(`/reviews/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updItem),
    });
    const data = await res.json();
    setReview(reviews.map((item) => (item.id === id ? data : item)));
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
