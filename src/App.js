import './App.css';
import React, { Component, useRef, useState } from 'react';
import Information from './components/Information';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Activities from './components/Activities';
import ReactToPrint from 'react-to-print';

class CV extends Component {
    render() {
        const { isPrintMode } = this.props;
        return (
            <main className={isPrintMode ? 'pdf' : undefined}>
                <Information />
                <Profile />
                <Skills />
                <Experience />
                <Education />
                <Activities />
            </main>
        );
    }
}

function App() {
    const componentRef = useRef();
    const [isPrintMode, setIsPrintMode] = useState(false);

    return (
        <div>
            <CV ref={componentRef} isPrintMode={isPrintMode} />
            <ReactToPrint
                trigger={() => <button id="print-btn">Print!</button>}
                content={() => componentRef.current}
                pageStyle="@page {margin: -1.5cm}"
                onBeforeGetContent={() => {
                    return new Promise((resolve) => {
                        setIsPrintMode(true);
                        resolve();
                    });
                }}
                onAfterPrint={() => setIsPrintMode(false)}
            />
        </div>
    );
}

export default App;
