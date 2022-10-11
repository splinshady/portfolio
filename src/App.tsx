import React from 'react';
import Header from "./components/header/Header";
import AboutMe from "./components/main/about-me/AboutMe";
import Skills from "./components/main/skills/Skills";
import Projects from "./components/main/projects/Projects";
import Invite from "./components/main/invite/Invite";
import Contacts from "./components/main/contacts/Contacts";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <Header />
            <AboutMe />
            <Skills />
            <Projects />
            <Invite />
            <Contacts />
            <Footer />
        </>
    );
}

export default App;
