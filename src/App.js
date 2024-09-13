// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/home';
import SecondPage from './pages/projects';
import AboutPage from './pages/about';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<SecondPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
