import './App.css';
import React, { Component } from 'react';

function App() {
    return (
        <div>
            <Section sectionName="Skills" />
        </div>
    );
}

class Section extends Component {
    render() {
        const { sectionName } = this.props;

        return (
            <div>
                <h1>{sectionName}</h1>
                <button>Edit</button>
                <hr></hr>
            </div>
        );
    }
}

export default App;
