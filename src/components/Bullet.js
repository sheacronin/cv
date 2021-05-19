import React, { Component } from 'react';
import '../styles/Skills.css';
import DeleteButton from './DeleteButton';
import Field from './Field';

class Bullet extends Component {
    render() {
        const {
            isEditable,
            item,
            handleChange,
            handleDeleteClick,
            isMultiline,
        } = this.props;

        return (
            <li className="bullet">
                {isEditable && (
                    <DeleteButton
                        onClick={handleDeleteClick}
                        fieldId={item.id}
                    />
                )}
                <Field
                    isEditable={isEditable}
                    value={item.text}
                    handleChange={handleChange}
                    itemId={item.id}
                    attribute={'text'}
                    isMultiline={isMultiline}
                />
            </li>
        );
    }
}

export default Bullet;
