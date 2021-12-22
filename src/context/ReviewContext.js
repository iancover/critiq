import { createContext, useState } from 'react';

// init context obj
const ReviewContext = createContext();

// create provider
export const ReviewProvider = ({ children }) => {
  let state = {
    id: 1,
    text: 'State object from Context',
    rating: 10,
  }

  const [review, setReview] = useState([state]);

  return (
    <ReviewContext.Provider value={{ review }}>
      {children}
    </ReviewContext.Provider>
  )
};

export default ReviewContext;
