import './App.css';
import React from 'react';
import Information from './components/Information';
import Experience, { Experience2 } from './components/Experience';
import Skills from './components/Skills';

function App() {
    return (
        <main>
            <Information />
            <Skills />
            <Experience />
            <Experience2 />
        </main>
    );
}

export default App;
