import { MdEditNote as EditIcon, MdDelete as DeleteIcon } from 'react-icons/md';
import PropTypes from 'prop-types';
import Card from './shared/Card';

function ReviewItem({ item, handleDelete }) {
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button className='edit' onClick={() => console.log('edit')}>
        <EditIcon />
        <span className={'tooltip'}>Edit</span>
      </button>
      <button className='close' onClick={() => handleDelete(item.id)}>
        <DeleteIcon />
        <span className={'tooltip'}>Delete</span>
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

ReviewItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ReviewItem;
