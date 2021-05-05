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
                <Job />
                <Job />
                <hr />
            </section>
        );
    }
}

const EditButton = () => {
    return <button>Edit</button>;
};

class Job extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Job Title',
            employer: 'Employer',
            location: 'City, State',
            startDate: 'Start Date',
            endDate: 'Present',
        };
    }

    render() {
        const { title, employer, location, startDate, endDate } = this.state;

        return (
            <article>
                <h3>
                    {employer}, {location}
                </h3>
                <h3>{title}</h3>
                <div>
                    {startDate}-{endDate}
                </div>
                <ul>
                    <li>Bullet 1</li>
                    <li>Bullet 2</li>
                    <li>Bullet 3</li>
                </ul>
            </article>
        );
    }
}

export default App;
