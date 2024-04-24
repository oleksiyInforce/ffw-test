import React from 'react';
import { Outlet } from 'react-router-dom';

import { Background } from 'components/ui/Background/Background';
import { Footer } from 'components/global/Footer/Footer';
import { Header } from 'components/global/Header/Header';

export const Layout = () => {
  return (
    <main>
      <Background />
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};
