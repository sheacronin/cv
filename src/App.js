import './App.css';
import React from 'react';
import Information from './components/Information';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Activities from './components/Activities';

function App() {
    return (
        <main>
            <Information />
            <Profile />
            <Skills />
            <Experience />
            <Education />
            <Activities />
        </main>
    );
}

export default App;
