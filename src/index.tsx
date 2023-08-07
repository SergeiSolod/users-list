import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from '@src/App';
import ReactDOM from 'react-dom/client';

window.addEventListener('DOMContentLoaded', function () {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
});
