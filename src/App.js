import './App.css';
import React, { Component } from 'react';

function App() {
    return (
        <main>
            <Information />
            <Section sectionName="Skills" />
            <Section sectionName="Experience" />
        </main>
    );
}

class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'First Last',
            email: 'firstlast@example.com',
            phoneNumber: '123-456-7890',
        };
    }

    render() {
        const { name, email, phoneNumber } = this.state;

        return (
            <section>
                <h1>{name}</h1>
                <EditButton />
                <div>
                    <span>{email}</span> | <span>{phoneNumber}</span>
                </div>
                <hr />
            </section>
        );
    }
}

class Section extends Component {
    render() {
        const { sectionName } = this.props;

        return (
            <section>
                <h2>{sectionName}</h2>
                <EditButton />
                <hr />
            </section>
        );
    }
}

const EditButton = () => {
    return <button>Edit</button>;
};

export default App;
