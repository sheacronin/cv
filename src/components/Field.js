import React from 'react';
import '../styles/Field.css';

function Field(props) {
    const { isEditable, value, handleChange, attribute, isMultiline } = props;

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
                    />
                ) : (
                    <input
                        className={attribute}
                        type="text"
                        value={value}
                        onChange={handleChange}
                    />
                )}
            </div>
        );
    } else {
        return <span className={attribute}>{value}</span>;
    }
}

export default Field;
