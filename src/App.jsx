import React, { Fragment } from 'react'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

import profileData from './json/profile.json'
import aboutData from './json/about.json'
import experienceData from './json/experience.json'
import servicesData from './json/services.json'
import portfolioData from './json/portfolio.json'

const App = () => {
    return (
        <Fragment>
            <Header profileData={profileData} />
            <Nav profileData={profileData} />
            <About profileData={profileData} aboutData={aboutData} />
            <Experience profileData={profileData} experienceData={experienceData} />
            <Services profileData={profileData} servicesData={servicesData} />
            <Portfolio profileData={profileData} portfolioData={portfolioData} />
            <Contact profileData={profileData} />
            <Footer profileData={profileData} />
        </Fragment>
    )
}

export default App