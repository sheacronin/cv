import React, { Component } from 'react';
import '../styles/Field.css';

class Field extends Component {
    render() {
        const { isEditable, value, TagName, handleChange, attribute, itemId } =
            this.props;

        if (isEditable) {
            return (
                <input
                    className={attribute}
                    type="text"
                    value={value}
                    onChange={handleChange}
                    data-item-id={itemId}
                />
            );
        } else {
            return <TagName className={attribute}>{value}</TagName>;
        }
    }
}

export default Field;
