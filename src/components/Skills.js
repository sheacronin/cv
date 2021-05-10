import React, { Component } from 'react';
import '../styles/Skills.css';
import EditButton from './EditButton';
import SubmitButton from './SubmitButton';
import Field from './Field';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditable: false,
            skills: [
                { text: 'Microsoft Word', id: '123' },
                { text: 'JavaScript', id: '345' },
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
        const newSkill = { text: 'Skill', id: 45 };
        this.setState({
            skills: [...this.state.skills, newSkill],
        });
    };

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

export default Skills;
