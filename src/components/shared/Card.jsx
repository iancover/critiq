import PropTypes from 'prop-types';

function Card({ children, reverse }) {
  const cardStyles = {
    backgroundColor: reverse ? 'var(--grey-color)' : 'var(--lightblue-color)',
    color: reverse ? 'var(--light-color)' : 'var(--grey-color)',
  };

  // return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
  return (
    <div className='card' style={cardStyles}>
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
