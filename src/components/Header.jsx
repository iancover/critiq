import PropTypes from 'prop-types';

function Header({ text, bgColor, txtColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: txtColor
  };

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Critiq App',
  bgColor: 'var(--grey-color)',
  txtColor: 'var(--light-color)'
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  txtColor: PropTypes.string.isRequired,
};

export default Header;
