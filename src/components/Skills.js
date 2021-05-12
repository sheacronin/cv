import React, { Component } from 'react';
import '../styles/Skills.css';
import DeleteButton from './DeleteButton';
import Field from './Field';
import uniqid from 'uniqid';
import Section from './Section';

class Skills extends Component {
    render() {
        return (
            <Section
                sectionTitle="Skills"
                items={[skillFactory(), skillFactory()]}
                ItemTag={Skill}
                itemFactory={skillFactory}
            />
        );
    }
}

const skillFactory = () => {
    return {
        text: 'Skill',
        id: uniqid(),
    };
};

class Skill extends Component {
    render() {
        const { isEditable, item, handleChange, handleDeleteClick } =
            this.props;

        return (
            <li>
                {isEditable && (
                    <DeleteButton
                        onClick={handleDeleteClick}
                        fieldId={item.id}
                    />
                )}
                <Field
                    TagName="span"
                    isEditable={isEditable}
                    value={item.text}
                    handleChange={handleChange}
                    className={item.id}
                />
            </li>
        );
    }
}

export default Skills;
