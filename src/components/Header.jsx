import PropTypes from 'prop-types';

function Header({ title, bgColor, txtColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: txtColor
  };

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h1 className='title'>{title}</h1>
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: 'CRITIQ',
  bgColor: 'var(--grey-color)',
  txtColor: 'var(--orange-color)'
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  txtColor: PropTypes.string.isRequired
};

export default Header;
