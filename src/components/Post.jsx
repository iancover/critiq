import { Navigate, useNavigate, Routes, Route } from 'react-router-dom';

function Post() {
  const status = 200;
  const navigate = useNavigate();
  const onClick = () => navigate('/about');
  status === 404 && <Navigate to={'/notfound'} />;

  return (
    <div>
      <h1>Post </h1>
      <button onClick={onClick} className={'btn btn-primary'}>
        Click
      </button>
      <Routes>
        <Route path={'/show'} element={<h1>Hello World</h1>} />
      </Routes>
    </div>
  );
}

export default Post;
