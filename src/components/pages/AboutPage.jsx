import Card from '../shared/Card';
import { NavLink, useMatch } from 'react-router-dom';

function AboutPage() {
  let match = useMatch('/about');

  console.log(match);

  return (
    <>
      <Card>
        <div className={'about'}>
          <h1>About critIQ</h1>
          <p>This is a React App to rate and review products originally from a Udemy course.</p>
          <p>Version: 1.0.0</p>
        </div>
      </Card>
      <Card>
        <nav>
          <NavLink
            to={'/'}
            className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
            style={({ isActive }) => ({ color: isActive ? 'var(--orange-color)' : 'var(--green-color)' })}>
            Home
          </NavLink>
          <NavLink
            to={'/post'}
            className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
            style={({ isActive }) => ({ color: isActive ? 'var(--orange-color)' : 'var(--green-color)' })}>
            Post
          </NavLink>
          <NavLink
            to={'.'}
            className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
            style={({ isActive }) => ({ color: isActive ? 'var(--orange-color)' : 'var(--green-color)' })}>
            About
          </NavLink>
        </nav>
      </Card>
    </>
  );
}

export default AboutPage;
