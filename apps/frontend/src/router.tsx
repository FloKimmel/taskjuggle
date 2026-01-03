import { createBrowserRouter } from 'react-router';
import { Home } from './pages';
import { BaseLayout } from './BaseLayout';
import { Login } from './pages/Login';

export const routes = {
  home: '/',
  login: '/login',
};

export const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      { path: routes.home, element: <Home /> },
      { path: routes.login, element: <Login /> },
    ],
  },
]);
