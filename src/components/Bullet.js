import React, { Component } from 'react';
import '../styles/Skills.css';
import DeleteButton from './DeleteButton';
import Field from './Field';

class Bullet extends Component {
    render() {
        const { isEditable, item, handleChange, handleDeleteClick } =
            this.props;

        return (
            <li className="bullet">
                {isEditable && (
                    <DeleteButton
                        onClick={handleDeleteClick}
                        fieldId={item.id}
                    />
                )}
                <Field
                    TagName="span"
                    isEditable={isEditable}
                    value={item.text}
                    handleChange={handleChange}
                    itemId={item.id}
                    attribute={'text'}
                />
            </li>
        );
    }
}

export default Bullet;
