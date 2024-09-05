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



import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.to(containerRef.current, { duration: 3, x: 500 });
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <h1>Bonjour avec GSAP et SCSS !</h1>
    </div>
  );
}

export default App;
