import React from 'react';
import ReactDOM from 'react-dom/client';

import { RootRouter } from 'components/global/Router/RootRouter';
import { StepProvider } from 'components/global/Provider/Provider';

import 'styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StepProvider>
    <RootRouter />
  </StepProvider>,
);
