import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { I18nextProvider } from 'react-i18next';
import { ErrorBoundary } from 'react-error-boundary';
import i18n from './i18n';
import { ErrorScreen } from './components/error-screen';
import reduxStore from './store';
import { Router } from './routes';
import './styles/theme.scss';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

export const { store, persistor } = reduxStore();

const queryClient = new QueryClient();

export const App = () => (
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorScreen}>
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
        >
          <QueryClientProvider client={queryClient}>
            <I18nextProvider i18n={i18n}>
              <Suspense fallback='loading'>
                <Router />
              </Suspense>
            </I18nextProvider>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
