import PropTypes from 'prop-types'


function Header({ text }) {
  return (
    <header>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Critiq App'
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Header;
