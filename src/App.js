import './App.css';
import React, { Component, useRef } from 'react';
import Information from './components/Information';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Activities from './components/Activities';
import ReactToPrint from 'react-to-print';

class CV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPrintMode: false,
        };
    }

    render() {
        const { isPrintMode } = this.state;
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

    return (
        <div>
            <CV ref={componentRef} />
            <ReactToPrint
                trigger={() => <button id="print-btn">Print!</button>}
                content={() => componentRef.current}
                pageStyle="@page {margin: -1.5cm}"
                onBeforeGetContent={() => {
                    return new Promise((resolve) => {
                        componentRef.current.setState(
                            { isPrintMode: true },
                            () => resolve()
                        );
                    });
                }}
                onAfterPrint={() =>
                    componentRef.current.setState({ isPrintMode: false })
                }
            />
        </div>
    );
}

export default App;
