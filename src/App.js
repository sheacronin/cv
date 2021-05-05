import './App.css';
import React, { Component } from 'react';

function App() {
    return (
        <main>
            <Section sectionName="Skills" />
            <Section sectionName="Experience" />
        </main>
    );
}

class Section extends Component {
    render() {
        const { sectionName } = this.props;

        return (
            <section>
                <h2>{sectionName}</h2>
                <button>Edit</button>
                <hr></hr>
            </section>
        );
    }
}

export default App;
