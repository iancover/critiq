import Card from '../shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
      <div className={'about'}>
        <h1>About critIQ</h1>
        <p>This is a React App to rate and review products originally from a Udemy course.</p>
        <p>Version: 1.0.0</p>

        <p>
          <Link to={'/'}>Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
