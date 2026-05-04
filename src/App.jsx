import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LocaleLayout from './components/LocaleLayout';
import Homepage from './components/Homepage';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Blogs from './components/pages/Blogs';
import Portfolio from './components/pages/Portfolio';
import { DEFAULT_LOCALE } from './constants/locales';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={`/${DEFAULT_LOCALE}`} replace />} />
        <Route path="/:lang" element={<LocaleLayout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/about" element={<Navigate to={`/${DEFAULT_LOCALE}/about`} replace />} />
        <Route path="/services" element={<Navigate to={`/${DEFAULT_LOCALE}/services`} replace />} />
        <Route path="/portfolio" element={<Navigate to={`/${DEFAULT_LOCALE}/portfolio`} replace />} />
        <Route path="/blogs" element={<Navigate to={`/${DEFAULT_LOCALE}/blogs`} replace />} />
        <Route path="/contact" element={<Navigate to={`/${DEFAULT_LOCALE}/contact`} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
