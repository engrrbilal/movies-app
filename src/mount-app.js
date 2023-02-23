
import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { App } from './app';
import { BUILD_ENV } from './constants/build-env';
const packageJson = require('../package.json');


const { version } = packageJson;
Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [new Integrations.BrowserTracing()],
  environment: process.env.REACT_APP_ENV,
  release: version,
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const mount = (element) => ReactDOM.render(<App/>, element);

if (process.env.REACT_APP_ENV === BUILD_ENV.DEVELOPMENT) {
  const devRoot = document.querySelector('#root');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
