import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import axios from 'axios';

import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL = 'http://httpbin.org';
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
