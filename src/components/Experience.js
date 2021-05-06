import React, { Component } from 'react';
import '../styles/Experience.css';
import EditButton from './EditButton';

class Experience extends Component {
    render() {
        return (
            <section>
                <h2>Experience</h2>
                <EditButton />
                <Job />
                <Job />
                <hr />
            </section>
        );
    }
}

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
            <article className="job">
                <h3>
                    {employer}, <span className="location">{location}</span>
                </h3>
                <h4>{title}</h4>
                <div className="dates">
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

export default Experience;
