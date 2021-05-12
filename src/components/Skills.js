import React, { Component } from 'react';
import '../styles/Skills.css';
import EditButton from './EditButton';
import SubmitButton from './SubmitButton';
import DeleteButton from './DeleteButton';
import Field from './Field';
import uniqid from 'uniqid';
import Section from './Section';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditable: false,
            skills: [
                { text: 'Microsoft Word', id: uniqid() },
                { text: 'JavaScript', id: uniqid() },
            ],
        };
    }

    handleChange = (e) => {
        const { skills } = this.state;

        // Make a copy of skills array.
        const newSkills = skills;
        const changeIndex = skills.findIndex(
            (skill) => skill.id === e.target.className
        );
        const changedSkill = { text: e.target.value, id: e.target.className };
        // Replace changed skill obj in array copy.
        newSkills.splice(changeIndex, 1, changedSkill);

        this.setState({
            skills: newSkills,
        });
    };

    handleAddFieldClick = () => {
        const newSkill = { text: 'Skill', id: uniqid() };
        this.setState({
            skills: [...this.state.skills, newSkill],
        });
    };

    handleEditClick = () => {
        this.setState({
            isEditable: true,
        });
    };

    handleDeleteClick = (e) => {
        const { skills } = this.state;

        // Make a copy of skills array.
        const newSkills = skills;
        const deleteIndex = skills.findIndex(
            (skill) => skill.id === e.currentTarget.dataset.field
        );
        // Mutate array copy by deleting selected skill.
        newSkills.splice(deleteIndex, 1);

        this.setState({
            skills: newSkills,
        });
    };

    handleSubmitClick = () => {
        this.setState({
            isEditable: false,
        });
    };

    render() {
        const { isEditable, skills } = this.state;

        return (
            <section id="skills">
                <h2>Skills</h2>
                {isEditable ? (
                    <SubmitButton onClick={this.handleSubmitClick} />
                ) : (
                    <EditButton onClick={this.handleEditClick} />
                )}
                <ul>
                    {skills.map((skill) => (
                        <li key={skill.id}>
                            {isEditable && (
                                <DeleteButton
                                    onClick={this.handleDeleteClick}
                                    fieldId={skill.id}
                                />
                            )}
                            <Field
                                TagName="span"
                                isEditable={isEditable}
                                value={skill.text}
                                handleChange={this.handleChange}
                                className={skill.id}
                            />
                        </li>
                    ))}
                </ul>
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

export class Skills2 extends Component {
    render() {
        return (
            <Section
                sectionTitle="Skills"
                items={[
                    { text: 'Microsoft Word', id: uniqid() },
                    { text: 'JavaScript', id: uniqid() },
                ]}
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
