import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ReviewItem from './ReviewItem';
import ReviewContext from '../context/ReviewContext';

function ReviewList() {
  const { reviews } = useContext(ReviewContext);

  (!reviews || reviews.length === 0) && <p>No Reviews Yet</p>;

  return (
    <div className='review-list'>
      <AnimatePresence>
        {reviews.map(item => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.05 }}>
            <ReviewItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default ReviewList;
