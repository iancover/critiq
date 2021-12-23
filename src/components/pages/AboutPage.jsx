import { Fragment } from 'react';
import Card from '../shared/Card';
import { NavLink } from 'react-router-dom';

function AboutPage() {
  let active = 'var(--orange-color)';
  let inactive = 'var(--green-color)';

  const handleActiveClass = ({ isActive }) => 'nav-link' + (isActive ? ' active' : '');
  const handleActiveStyle = ({ isActive }) => ({ color: isActive ? active : inactive });

  return (
    <Fragment>
      <Card>
        <div className={'about'}>
          <h1>About critIQ</h1>
          <p>This is a React App for posting ratings and reviews by critics originally from a Udemy course project.</p>
          <p>Version: 1.0.0</p>
        </div>
      </Card>
      <Card>
        <nav>
          <NavLink to={'/'} className={handleActiveClass} style={handleActiveStyle}>
            Home
          </NavLink>
          <NavLink to={'/post'} className={handleActiveClass} style={handleActiveStyle}>
            Post
          </NavLink>
          <NavLink to={'.'} className={handleActiveClass} style={handleActiveStyle}>
            About
          </NavLink>
        </nav>
      </Card>
    </Fragment>
  );
}

export default AboutPage;
