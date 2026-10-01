import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { store } from '@/store/store';
// import { SocketProvider } from '@/socket/SocketProvider';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import { AppRoutes } from '@/routes/AppRoutes';

export default function App() {
  return (
    <ErrorBoundary>
      {/* <Provider store={store}> */}
        {/* <SocketProvider> */}
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        {/* </SocketProvider> */}
      {/* </Provider> */}
    </ErrorBoundary>
  );
}
