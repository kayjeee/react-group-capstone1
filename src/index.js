import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Updated import
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/configureStore';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router> {/* Wrap your components with the Router */}
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
