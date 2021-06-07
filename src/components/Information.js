import React from 'react';
import '../styles/Information.css';
import Field from './Field';
import SubmitButton from './SubmitButton';
import EditButton from './EditButton';
import useEditable from '../hooks/useEditable';
import useField from '../hooks/useField';

function Information() {
    const [isEditable, handleEditClick] = useEditable();
    const name = useField('First Last');
    const email = useField('firstlast@example.com');
    const phoneNumber = useField('123-456-7890');

    return (
        <section id="information">
            <h1>
                <Field
                    attribute="name"
                    value={name.value}
                    isEditable={isEditable}
                    handleChange={name.handleChange}
                />
            </h1>
            {isEditable ? (
                <SubmitButton onClick={handleEditClick} />
            ) : (
                <EditButton onClick={handleEditClick} />
            )}
            <div>
                <Field
                    attribute="email"
                    value={email.value}
                    isEditable={isEditable}
                    handleChange={email.handleChange}
                />
                {' | '}
                <Field
                    attribute="phoneNumber"
                    value={phoneNumber.value}
                    isEditable={isEditable}
                    handleChange={phoneNumber.handleChange}
                />
            </div>
            <hr />
        </section>
    );
}

export default Information;
