
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Overview from './pages/Overview';
import History from './pages/History';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
