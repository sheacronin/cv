import React, { Component } from 'react';

class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'First Last',
            email: 'firstlast@example.com',
            phoneNumber: '123-456-7890',
        };
    }

    render() {
        const { name, email, phoneNumber } = this.state;

        return (
            <section>
                <h1>{name}</h1>
                {/* <EditButton /> */}
                <div>
                    <span>{email}</span> | <span>{phoneNumber}</span>
                </div>
                <hr />
            </section>
        );
    }
}

export default Information;
