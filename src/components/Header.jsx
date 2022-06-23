import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header({ titleStart, titleEnd, bgColor, txtColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: txtColor,
  };

  return (
    <header style={headerStyles}>
      <div className='container'>
        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1 className='title'>
            {titleStart}
            <span className='title'>{titleEnd}</span>
          </h1>
        </Link>
      </div>
    </header>
  );
}

Header.defaultProps = {
  titleStart: 'crit',
  titleEnd: 'IQ',
  bgColor: 'rgba(0,0,0,0.4)',
  txtColor: 'var(--orange-color)',
};

Header.propTypes = {
  titleStart: PropTypes.string.isRequired,
  titleEnd: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  txtColor: PropTypes.string.isRequired,
};

export default Header;
