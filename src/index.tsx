import React from 'react';
import ReactDOM from 'react-dom';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { RouterNode } from './routes';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<RouterNode />, document.getElementById('root') as HTMLElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
