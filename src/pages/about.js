import React, { useState } from 'react';

import KeySection from '../components/about/KeySection';
import InfiniteLoop from '../components/about/InfiniteLoop';
import CanvaEquipe from '../components/about/CanvaEquipe';

const AboutPage = () => {

    return (
        <div>
            <KeySection />
            <InfiniteLoop />
            <CanvaEquipe />
        </div>
    );
};

export default AboutPage;