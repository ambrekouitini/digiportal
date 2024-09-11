// export default App;

import React from 'react';
import HeroBanner from './components/HeroBanner';
import RevealText from './components/RevealText';
import Description from './components/Description';
import ScrollProvider from './components/ScrollProvider';
import Ressources from './components/Ressources';
import Equipe from './components/Equipe';
import Contributions from './components/Contributions';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Initiatives from './components/Initiatives';

const App = () => {
  return (
    <div>
      <HeroBanner />
      <RevealText />
      <Projects />
      <Description />
      <Initiatives />
      <Ressources />
      <Contributions />
      <Equipe />
      <Footer />
    </div>
  );
};

export default App;

