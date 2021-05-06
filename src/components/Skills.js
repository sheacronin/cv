import React, { Component } from 'react';
// insert css here
import EditButton from './EditButton';
import SubmitButton from './SubmitButton';
import Field from './Field';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditable: false,
            skills: [
                { text: 'Microsoft Word', id: 123 },
                { text: 'JavaScript', id: 345 },
            ],
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.className]: e.target.value,
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
                            />
                        </li>
                    ))}
                </ul>
                <hr />
            </section>
        );
    }
}

export default Skills;
