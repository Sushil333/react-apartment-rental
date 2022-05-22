import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import { useSelector } from 'react-redux';
// routes
import routes from './routes';

function App() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const routing = useRoutes(routes(userInfo));
  return (
    <Suspense fallback={<div>Loading...</div>}>{routing}</Suspense>
  );
}

export default App;
