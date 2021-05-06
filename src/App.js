import './App.css';
import React, { Component } from 'react';
import Information from './components/Information';
import Experience from './components/Experience';

function App() {
    return (
        <main>
            <Information />
            <Section sectionName="Skills" />
            <Experience />
        </main>
    );
}

class Section extends Component {
    render() {
        const { sectionName } = this.props;

        return (
            <section>
                <h2>{sectionName}</h2>
                {/* <EditButton /> */}
                <hr />
            </section>
        );
    }
}

export default App;
