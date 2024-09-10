// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import heroBanner from './components/heroBanner';

// function App() {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     gsap.to(containerRef.current, { duration: 3, x: 500 });
//   }, []);

//   return (
//     <div>
//       <heroBanner />
//     </div>
//     // <div className="container" ref={containerRef}>
//     //   <h1>Bonjour avec GSAP et SCSS !</h1>
//     // </div>
//   );
// }

// export default App;

import React from 'react';
import HeroBanner from './components/HeroBanner';
import RevealText from './components/RevealText';
import Description from './components/Description';
import ScrollProvider from './components/ScrollProvider';
import Ressources from './components/Ressources';
import Equipe from './components/Equipe';

const App = () => {
  return (
    <div>
      <HeroBanner />
      <RevealText />
      <Description />
      <Ressources />
      <Equipe />
    </div>
  );
};

export default App;

