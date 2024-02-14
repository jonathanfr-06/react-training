import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Notfound from './views/base/Notfound';
import RegisterView from './views/account/RegisterView';
import LoginView from './views/account/LoginView';
import AdminHome from './views/admin/Home';
import Product from './views/products/Product';
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
        <Route path="/login" element={<LoginView />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
