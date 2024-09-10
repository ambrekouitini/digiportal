// export default App;

import React from 'react';
import HeroBanner from './components/HeroBanner';
import RevealText from './components/RevealText';
import Description from './components/Description';
// import ScrollProvider from './components/ScrollProvider';
import Ressources from './components/Ressources';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <HeroBanner />
      <RevealText />
      <Description />
      <Ressources />
    </div>
  );
};

export default App;

