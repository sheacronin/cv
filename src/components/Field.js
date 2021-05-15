import React, { Component } from 'react';
import '../styles/Field.css';

class Field extends Component {
    render() {
        const { isEditable, value, TagName, handleChange, attribute, itemId } =
            this.props;

        if (isEditable) {
            return (
                <div className="input-wrapper">
                    {/* Add span w/ value to make input width dynamic */}
                    <span className={attribute} aria-hidden="true">
                        {value}
                    </span>
                    <input
                        className={attribute}
                        type="text"
                        value={value}
                        onChange={handleChange}
                        data-item-id={itemId}
                    />
                </div>
            );
        } else {
            return <TagName className={attribute}>{value}</TagName>;
        }
    }
}

export default Field;
