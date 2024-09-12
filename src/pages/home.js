// export default App;

import React from 'react';

import HeroBanner from '../components/home/HeroBanner';
import RevealText from '../components/home/RevealText';
import Description from '../components/home/Description';
import ScrollProvider from '../components/home/ScrollProvider';
import Ressources from '../components/home/Ressources';
import Equipe from '../components/home/Equipe';
import Contributions from '../components/home/Contributions';
import Footer from '../components/home/Footer';
import Projects from '../components/home/Projects';
import Initiatives from '../components/home/Initiatives';

const App = () => {
  return (
    <div>
      <ScrollProvider />
      <HeroBanner />
      <RevealText />
      <Projects />
      <Description />
      <Ressources />
      <Initiatives />
      <Contributions />
      <Equipe />
      <Footer />
    </div>
  );
};

export default App;