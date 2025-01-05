import React from 'react';
import Banner from './Banner';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skill/Skills';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutMe/>
            {/* <Experience/> */}
            <Skills/>
            <Education/>
            <Projects/>
        </div>
    );
};

export default Home;