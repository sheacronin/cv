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
            skills: [],
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
        const { isEditable } = this.state;

        return (
            <section id="skills">
                <h2>Skills</h2>
                {isEditable ? (
                    <SubmitButton onClick={this.handleSubmitClick} />
                ) : (
                    <EditButton onClick={this.handleEditClick} />
                )}
                <ul>
                    <li>
                        <Field TagName="span" isEditable={isEditable} />
                    </li>
                </ul>
                <hr />
            </section>
        );
    }
}

export default Skills;
