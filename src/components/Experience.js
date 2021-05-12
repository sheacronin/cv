import React, { Component } from 'react';
import '../styles/Experience.css';
import DeleteButton from './DeleteButton';
import Field from './Field';
import uniqid from 'uniqid';
import Section from './Section';
import Bullet from './Bullet';

class Experience extends Component {
    render() {
        return (
            <Section
                sectionTitle="Experience"
                items={[jobFactory()]}
                ItemTag={Job}
                itemFactory={jobFactory}
            />
        );
    }
}

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
                    itemId={item.id}
                    attribute={'title'}
                />
                <div className="dates">
                    {item.startDate}-{item.endDate}
                </div>
                <ul>
                    {item.bullets.map((bullet) => (
                        <Bullet
                            key={bullet.id}
                            isEditable={isEditable}
                            item={bullet}
                            handleChange={handleChange}
                            handleDeleteClick={handleDeleteClick}
                        />
                    ))}
                </ul>
            </article>
        );
    }
}

export default Experience;
