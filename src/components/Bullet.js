import React from 'react';
import '../styles/Skills.css';
import DeleteButton from './DeleteButton';
import Field from './Field';

function Bullet(props) {
    const { isEditable, item, handleChange, handleDeleteClick, isMultiline } =
        props;

    return (
        <li className="bullet">
            {isEditable && <DeleteButton onClick={handleDeleteClick} />}
            <Field
                isEditable={isEditable}
                value={item.text}
                handleChange={handleChange}
                attribute={'text'}
                isMultiline={isMultiline}
            />
        </li>
    );
}

export default Bullet;
