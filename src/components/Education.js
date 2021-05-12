import React, { Component } from 'react';
import '../styles/Experience.css';
import DeleteButton from './DeleteButton';
import Field from './Field';
import uniqid from 'uniqid';
import Section, { ItemsList } from './Section';

function schoolFactory() {
    return {
        institution: 'Institution',
        gradDate: 'May 20XX',
        location: 'City, State',
        degree: 'B.A. in [ Major ]',
        id: uniqid(),
    };
}

class Education extends Component {
    render() {
        return (
            <Section
                sectionTitle="Education"
                items={[schoolFactory()]}
                ItemTag={School}
                itemFactory={schoolFactory}
            />
        );
    }
}

class School extends Component {
    render() {
        const { item, isEditable, handleChange, handleDeleteClick } =
            this.props;

        return (
            <article className="school">
                {isEditable && (
                    <DeleteButton
                        onClick={handleDeleteClick}
                        fieldId={item.id}
                    />
                )}
                <h3>
                    {item.institution},{' '}
                    <span className="location">{item.location}</span>
                </h3>
                <Field
                    isEditable={isEditable}
                    value={item.degree}
                    TagName="div"
                    handleChange={handleChange}
                    itemId={item.id}
                    attribute={'degree'}
                />
                <div className="dates">{item.gradDate}</div>
            </article>
        );
    }
}

export default Education;
