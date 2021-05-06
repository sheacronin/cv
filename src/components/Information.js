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
            fields: {
                name: 'First Last',
                email: 'firstlast@example.com',
                phoneNumber: '123-456-7890',
            },
        };
    }

    handleEditClick = () => {
        console.log('Edit click!');
        this.setState({
            isEditable: true,
        });
    };

    handleSubmitClick = () => {
        console.log('Submit click!');
        this.setState({
            isEditable: false,
        });
    };

    render() {
        const { name, email, phoneNumber } = this.state.fields;
        const { isEditable } = this.state;

        return (
            <section id="information">
                <Field value={name} isEditable={isEditable} TagName="h1" />
                {isEditable ? (
                    <SubmitButton onClick={this.handleSubmitClick} />
                ) : (
                    <EditButton onClick={this.handleEditClick} />
                )}
                <div>
                    <Field
                        value={email}
                        isEditable={isEditable}
                        TagName="span"
                    />
                    {' | '}
                    <Field
                        value={phoneNumber}
                        isEditable={isEditable}
                        TagName="span"
                    />
                </div>
                <hr />
            </section>
        );
    }
}

export default Information;
