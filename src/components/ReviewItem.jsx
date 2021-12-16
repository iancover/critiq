import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types';
import Card from './shared/Card';

function ReviewItem({ item, handleDelete }) {
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button className='close' onClick={() => handleDelete(item.id)}>
        <MdClose color='var(--grey-color)' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

ReviewItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ReviewItem;
