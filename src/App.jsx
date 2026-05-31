import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import LocaleLayout from "./components/LocaleLayout";
import AnalyticsTracker from "./components/AnalyticsTracker";
import Homepage from "./components/Homepage";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import VisitorAnalytics from "./components/pages/VisitorAnalytics";
import { DEFAULT_LOCALE } from "./constants/locales";

function App() {
  return (
    <BrowserRouter>
      <AnalyticsTracker />
      <Routes>
        <Route path="/" element={<Navigate to={`/${DEFAULT_LOCALE}`} replace />} />
        <Route path="/analytics" element={<VisitorAnalytics />} />
        <Route path="/:lang" element={<LocaleLayout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/about" element={<Navigate to={`/${DEFAULT_LOCALE}/about`} replace />} />
        <Route path="/services" element={<Navigate to={`/${DEFAULT_LOCALE}/services`} replace />} />
        <Route path="/portfolio" element={<Navigate to={`/${DEFAULT_LOCALE}/portfolio`} replace />} />
        <Route path="/contact" element={<Navigate to={`/${DEFAULT_LOCALE}/contact`} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
