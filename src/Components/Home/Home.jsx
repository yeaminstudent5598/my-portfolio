import React from 'react';
import Banner from './Banner';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skill/Skills';
import Education from './Education/Education';
import Projects from './Projects/Projects';
import AnimationSection from './AnimationSection';

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutMe/>
            {/* <AnimationSection/> */}
            {/* <Experience/> */}
            <Skills/>
            <Education/>
            <Projects/>
        </div>
    );
};

export default Home;