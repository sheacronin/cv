import React, { Component } from 'react';

class Experience extends Component {
    render() {
        const { sectionName } = this.props;

        return (
            <section>
                <h2>{sectionName}</h2>
                {/* <EditButton /> */}
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

export default Experience;
