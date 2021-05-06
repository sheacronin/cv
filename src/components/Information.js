import React, { Component } from 'react';
import '../styles/Information.css';
import EditButton from './EditButton';
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

    render() {
        const { name, email, phoneNumber } = this.state.fields;
        const { isEditable } = this.state;

        return (
            <section id="information">
                <Field value={name} isEditable={isEditable} TagName="h1" />
                <EditButton />
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
