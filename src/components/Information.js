import React, { Component } from 'react';
import '../styles/Information.css';
import EditButton from './EditButton';
import SubmitButton from './SubmitButton';
import Field from './Field';

class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditable: false,
            name: 'First Last',
            email: 'firstlast@example.com',
            phoneNumber: '123-456-7890',
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
        const { name, email, phoneNumber, isEditable } = this.state;

        return (
            <section id="information">
                <Field
                    attribute="name"
                    value={name}
                    isEditable={isEditable}
                    TagName="h1"
                    handleChange={this.handleChange}
                />
                {isEditable ? (
                    <SubmitButton onClick={this.handleSubmitClick} />
                ) : (
                    <EditButton onClick={this.handleEditClick} />
                )}
                <div>
                    <Field
                        attribute="email"
                        value={email}
                        isEditable={isEditable}
                        TagName="span"
                        handleChange={this.handleChange}
                    />
                    {' | '}
                    <Field
                        attribute="phoneNumber"
                        value={phoneNumber}
                        isEditable={isEditable}
                        TagName="span"
                        handleChange={this.handleChange}
                    />
                </div>
                <hr />
            </section>
        );
    }
}

export default Information;
