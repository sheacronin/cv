import './App.css';
import React from 'react';
import Information from './components/Information';
import Experience from './components/Experience';
import Skills from './components/Skills';

function App() {
    return (
        <main>
            <Information />
            <Skills />
            <Experience />
        </main>
    );
}

export default App;
