import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n';
import { RouterNode } from './routes';
import * as serviceWorker from './serviceWorker';
import { PersistGate } from 'redux-persist/integration/react';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import 'bootstrap/dist/css/bootstrap.css';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <I18nextProvider i18n={i18n}>
        <RouterNode />
      </I18nextProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
