import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Notfound from './views/base/Notfound';
import RegisterView from './views/account/RegisterView';
import Header from './components/reusables/header';
import Footer from './components/reusables/footer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
