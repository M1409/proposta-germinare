import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss'
import App from './App';
import { HashRouter as Router } from "react-router-dom";
import { LazyLoading } from './Pages/LazyLoading/LazyLoading';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <React.Suspense fallback={<LazyLoading/>}>
      <App />
    </React.Suspense>
  </Router>
);
