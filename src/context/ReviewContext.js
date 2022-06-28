import { createContext, useState, useEffect } from 'react';

// data
import ReviewData from '../data/ReviewData';

// init context obj
const ReviewContext = createContext();

// create provider
export const ReviewProvider = ({ children }) => {
  // *** UNCOMMENT LINES TO RUN W/JSON SERVER ***
  // const [isLoading, setIsLoading] = useState(true);
  // const [reviews, setReviews] = useState([]);

  // *** COMMENT OUT LINE TO RUN W/JSON SERVER ***
  const [reviews, setReviews] = useState(ReviewData);

  const [reviewEdit, setReviewEdit] = useState({
    item: {},
    edit: false,
  });

  // *** UNCOMMENT TO RUN W/JSON SERVER ***
  // useEffect(() => {
  //   fetchReviews();
  // }, []);

  // *** UNCOMMENT TO RUN W/JSON SERVER ***
  // const fetchReviews = async () => {
  //   // package.json > proxy: http://localhost:5000
  //   const res = await fetch('/reviews?_sort=id&_order=desc');
  //   const data = await res.json();
  //   setReviews(data);
  //   setIsLoading(false);
  // };

  const addReview = async (newReview) => {
    // *** UNCOMMENT TO RUN W/JSON SERVER ***
    // const res = await fetch('/reviews', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(newReview),
    // });
    // const data = await res.json();
    // setReviews([data, ...reviews]);

    // *** COMMENT OUT LINE TO RUN W/JSON SERVER ***
    setReviews([newReview, ...reviews]);
  };

  const deleteReview = async (id) => {
    if (window.confirm('Permanently delete review?')) {
      // *** UNCOMMENT TO RUN W/JSON SERVER ***
      // await fetch(`/reviews/${id}`, { method: 'DELETE' });

      setReviews(reviews.filter((item) => item.id !== id));
    }
  };

  const editReview = (item) => {
    setReviewEdit({
      item,
      edit: true,
    });
  };

  const updateReview = async (id, updItem) => {
    // *** UNCOMMENT LINES TO RUN W/JSON SERVER ***
    // const res = await fetch(`/reviews/${id}`, {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(updItem),
    // });
    // const data = await res.json();
    // setReviews(reviews.map((item) => (item.id === id ? data : item)));

    // *** COMMENT OUT LINES TO RUN W/JSON SERVER ***
    const data = { id, ...updItem };
    setReviews(reviews.map((item) => (item.id === id ? data : item)));
  };

  return (
    <ReviewContext.Provider
      value={{
        reviews,
        reviewEdit,
        // isLoading,
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
