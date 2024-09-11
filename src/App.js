// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/home';
import SecondPage from './pages/projects';

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </nav> */}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<SecondPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
