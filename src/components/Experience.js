import React, { Component } from 'react';
import '../styles/Experience.css';
import EditButton from './EditButton';
import SubmitButton from './SubmitButton';
import DeleteButton from './DeleteButton';
import Field from './Field';
import uniqid from 'uniqid';
import Section from './Section';

const jobFactory = () => {
    return {
        title: 'Job Title',
        employer: 'Employer',
        location: 'City, State',
        startDate: 'Start Date',
        endDate: 'Present',
        bullets: [
            { text: 'Bullet 1', id: uniqid() },
            { text: 'Bullet 2', id: uniqid() },
            { text: 'Bullet 3', id: uniqid() },
        ],
        id: uniqid(),
    };
};

class Experience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditable: false,
            jobs: [
                {
                    title: 'Job Title',
                    employer: 'Employer',
                    location: 'City, State',
                    startDate: 'Start Date',
                    endDate: 'Present',
                    bullets: [
                        { text: 'Bullet 1', id: uniqid() },
                        { text: 'Bullet 2', id: uniqid() },
                        { text: 'Bullet 3', id: uniqid() },
                    ],
                    id: '123',
                },
                jobFactory(),
            ],
        };
    }

    handleEditClick = () => {
        this.setState({
            isEditable: true,
        });
    };

    handleSubmitClick = () => {
        this.setState({
            isEditable: false,
        });
    };

    render() {
        const { jobs, isEditable } = this.state;

        return (
            <section>
                <h2>Experience</h2>
                {isEditable ? (
                    <SubmitButton onClick={this.handleSubmitClick} />
                ) : (
                    <EditButton onClick={this.handleEditClick} />
                )}
                {jobs.map((job) => (
                    <Job
                        key={job.id}
                        isEditable={isEditable}
                        handleChange={this.handleChange}
                        item={job}
                    />
                ))}
                {isEditable && (
                    <button id="new-skill" onClick={this.handleAddFieldClick}>
                        +
                    </button>
                )}
                <hr />
            </section>
        );
    }
}

export class Experience2 extends Component {
    render() {
        return (
            <Section
                sectionTitle="Experience"
                items={[
                    {
                        title: 'Job Title',
                        employer: 'Employer',
                        location: 'City, State',
                        startDate: 'Start Date',
                        endDate: 'Present',
                        bullets: [
                            { text: 'Bullet 1', id: uniqid() },
                            { text: 'Bullet 2', id: uniqid() },
                            { text: 'Bullet 3', id: uniqid() },
                        ],
                        id: '123',
                    },
                ]}
                ItemTag={Job}
                itemFactory={jobFactory}
            />
        );
    }
}

class Job extends Component {
    render() {
        const { item, isEditable, handleChange, handleDeleteClick } =
            this.props;

        return (
            <article className="job">
                {isEditable && (
                    <DeleteButton
                        onClick={handleDeleteClick}
                        fieldId={item.id}
                    />
                )}
                <h3>
                    {item.employer},{' '}
                    <span className="location">{item.location}</span>
                </h3>
                <Field
                    isEditable={isEditable}
                    value={item.title}
                    TagName="h4"
                    handleChange={handleChange}
                />
                <div className="dates">
                    {item.startDate}-{item.endDate}
                </div>
                <ul>
                    {item.bullets.map((bullet) => (
                        <Field
                            key={bullet.id}
                            value={bullet.text}
                            isEditable={isEditable}
                            TagName="li"
                        />
                    ))}
                </ul>
            </article>
        );
    }
}

export default Experience;
