import { createBrowserRouter } from 'react-router';
import RootLayout from '../Layout/RootLayout.jsx';
import Home from '../Pages/Home/Home.jsx';
import Apps from '../Pages/Apps/Apps.jsx';
import Installation from '../Pages/Intallation/Installation.jsx';
import AppsDetails from '../Pages/AppsDetails/AppsDetails.jsx';
import EmptyState from '../Components/EmptyState.jsx';
import ErrorPage from '../Components/ErrorPage.jsx';
import LoadingDesign from '../Components/Loading/LoadingDesign.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    HydrateFallback: <LoadingDesign></LoadingDesign>,
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
        path: '/appsDetails/:detailsId',
        Component: AppsDetails,
      },
      {
        path: '/installation',
        Component: Installation,
      },
    ],
  },
]);

export default router;
