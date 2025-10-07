import { createBrowserRouter } from 'react-router';
import RootLayout from '../Layout/RootLayout.jsx';
import Home from '../Pages/Home/Home.jsx';
import Apps from '../Pages/Apps/Apps.jsx';
import Installation from '../Pages/Intallation/Installation.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/apps',
        Component: Apps,
      },
      {
        path: '/installation',
        Component: Installation,
      },
    ],
  },
]);

export default router;
