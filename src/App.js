// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/home';
import SecondPage from './pages/projects';
import AboutPage from './pages/about';
import Beauterra from './pages/projects/beauterra';

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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects/beauterra" element={<Beauterra />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
