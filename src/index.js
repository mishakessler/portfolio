// React
import React from 'react';

// React DOM
import ReactDOM from 'react-dom';

// React Router
import { BrowserRouter as Router } from 'react-router-dom'

import ScrollToTop from './components/plug-ins/ScrollToTop'

import 'semantic-ui-css/semantic.min.css';
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router >
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>, document.getElementById('root'));

serviceWorker.unregister();
