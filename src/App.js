import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// components
import Header from './components/Header';
import ReviewForm from './components/ReviewForm';
import ReviewStats from './components/ReviewStats';
import ReviewList from './components/ReviewList';
import AboutPage from './components/pages/AboutPage';
import AboutLink from './components/AboutLink';
// context
import { ReviewProvider } from './context/ReviewContext';

function App() {
  return (
    <ReviewProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <ReviewForm />
                  <ReviewStats />
                  <ReviewList />
                </>
              }></Route>

            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <AboutLink />
        </div>
      </Router>
    </ReviewProvider>
  );
}

export default App;
