import PropTypes from 'prop-types';
import Card from './shared/Card';

function ReviewItem({ item }) {
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

ReviewItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default ReviewItem;
