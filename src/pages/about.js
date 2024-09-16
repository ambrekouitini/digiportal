import React, { useState } from 'react';

import KeySection from '../components/about/KeySection';
import InfiniteLoop from '../components/about/InfiniteLoop';
import CanvaEquipe from '../components/about/CanvaEquipe';
import Mission from '../components/about/Mission';
import ScrollProvider from '../components/home/ScrollProvider';

const AboutPage = () => {

    return (
        <div>
            <ScrollProvider />
            <KeySection />
            <InfiniteLoop />
            <CanvaEquipe />
            <Mission />
        </div>
    );
};

export default AboutPage;