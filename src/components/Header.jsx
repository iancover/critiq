import PropTypes from 'prop-types';

function Header({ titleStart, titleEnd, bgColor, txtColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: txtColor
  };

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h1 className='title'>{titleStart}<span className='title'>{titleEnd}</span></h1>
      </div>
    </header>
  );
}

Header.defaultProps = {
  titleStart: 'crit',
  titleEnd: 'IQ',
  bgColor: 'var(--grey-color)',
  txtColor: 'var(--orange-color)'
};

Header.propTypes = {
  titleStart: PropTypes.string.isRequired,
  titleEnd: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  txtColor: PropTypes.string.isRequired
};

export default Header;
