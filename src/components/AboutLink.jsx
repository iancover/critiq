import { Link, useMatch } from 'react-router-dom';
import { FaInfoCircle } from 'react-icons/fa';

function AboutLink() {
  let match = useMatch('/about');

  return (
    <div className={'about-link'}>
      {!match && (
        <Link
          to={{
            pathname: '/about',
            search: '?sort=name',
            hash: '#hello',
          }}>
          <FaInfoCircle size={30} className={'about-icon'} />
          <span className={'tooltip'}>About</span>
        </Link>
      )}
    </div>
  );
}

export default AboutLink;
