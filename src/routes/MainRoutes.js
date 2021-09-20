import MainLayout from '../layout/MainLayout';
import Loadable from '../components/Loadable';
import React, { lazy } from 'react';

const DashboardDefault = Loadable(
  lazy(() => import('../views/dashboard/Default'))
);

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    }
  ]
};

export default MainRoutes;
