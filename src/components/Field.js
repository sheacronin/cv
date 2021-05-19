import React, { Component } from 'react';
import '../styles/Field.css';

class Field extends Component {
    render() {
        const {
            isEditable,
            value,
            handleChange,
            attribute,
            itemId,
            isMultiline,
        } = this.props;

        if (isEditable) {
            return (
                <div className="input-wrapper">
                    {/* Add span w/ value to make input width dynamic */}
                    <span className={attribute} aria-hidden="true">
                        {value}
                    </span>
                    {isMultiline ? (
                        <textarea
                            className={attribute}
                            value={value}
                            onChange={handleChange}
                            data-item-id={itemId}
                        />
                    ) : (
                        <input
                            className={attribute}
                            type="text"
                            value={value}
                            onChange={handleChange}
                            data-item-id={itemId}
                        />
                    )}
                </div>
            );
        } else {
            return <span className={attribute}>{value}</span>;
        }
    }
}

export default Field;
