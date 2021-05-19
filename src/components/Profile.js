import React, { Component } from 'react';
import EditButton from './EditButton';
import SubmitButton from './SubmitButton';
import '../styles/Profile.css';
import Field from './Field';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditable: false,
            blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum bibendum enim et viverra. Quisque massa augue, ullamcorper nec ultricies ut, efficitur et diam. Etiam commodo est eget risus posuere euismod. Mauris a augue vel mi volutpat congue. Vivamus placerat aliquet ultrices. ',
        };
    }

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

    handleChange = (e) => {
        this.setState({
            blurb: e.target.value,
        });
    };

    render() {
        const { isEditable, blurb } = this.state;

        return (
            <section id="profile">
                <h2>Profile</h2>
                {isEditable ? (
                    <SubmitButton onClick={this.handleSubmitClick} />
                ) : (
                    <EditButton onClick={this.handleEditClick} />
                )}
                <Field
                    isEditable={isEditable}
                    value={blurb}
                    handleChange={this.handleChange}
                    isMultiline={true}
                />
                <hr />
            </section>
        );
    }
}

export default Profile;
