import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

import ReviewItem from './ReviewItem';

function ReviewList({ review, handleDelete }) {
  if (!review || review.length === 0) {
    return <p>No Reviews Yet</p>;
  }

  return (
    <div className='review-list'>
      <AnimatePresence>
        {review.map(item => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.05 }}>
            <ReviewItem key={item.id} item={item} handleDelete={handleDelete} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // // without Framer Motion
  // return (
  //   <div className='review-list'>
  //     {review.map(item => (
  //       <ReviewItem key={item.id} item={item} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // );
}

ReviewList.propTypes = {
  review: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.node.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default ReviewList;
