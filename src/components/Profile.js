import React from 'react';
import EditButton from './EditButton';
import SubmitButton from './SubmitButton';
import '../styles/Profile.css';
import Field from './Field';
import useField from '../hooks/useField';
import useEditable from '../hooks/useEditable';

function Profile() {
    const [isEditable, handleEditClick] = useEditable();

    const blurb = useField(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum bibendum enim et viverra. Quisque massa augue, ullamcorper nec ultricies ut, efficitur et diam. Etiam commodo est eget risus posuere euismod. Mauris a augue vel mi volutpat congue. Vivamus placerat aliquet ultrices. '
    );

    return (
        <section id="profile">
            <h2>Profile</h2>
            {isEditable ? (
                <SubmitButton onClick={handleEditClick} />
            ) : (
                <EditButton onClick={handleEditClick} />
            )}
            <Field
                isEditable={isEditable}
                value={blurb.value}
                handleChange={blurb.handleChange}
                isMultiline={true}
            />
            <hr />
        </section>
    );
}

export default Profile;
