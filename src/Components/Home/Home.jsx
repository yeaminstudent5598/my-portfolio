import React from 'react';
import Banner from './Banner';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skill/Skills';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import Projects from './Projects/Projects';
import Experienc from './Experienc/Experienc';
import AnimationSection from './AnimationSection';

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutMe/>
            {/* <AnimationSection/> */}
            {/* <Experience/> */}
            <Skills/>
            <Experienc/>
            <Education/>
            <Projects/>
        </div>
    );
};

export default Home;