import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Main } from 'components/screens/Main/Main';
import { Layout } from './Layout';
import { Subscribe } from 'components/screens/Subscribe/Subscribe';

export const RootRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: '/subscribe',
          element: <Subscribe />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
