import React, { Component } from 'react';
import '../styles/Field.css';

class Field extends Component {
    render() {
        const {
            isEditable,
            value,
            TagName,
            handleChange,
            className,
        } = this.props;

        if (isEditable) {
            return (
                <input
                    className={className}
                    type="text"
                    value={value}
                    onChange={handleChange}
                />
            );
        } else {
            return <TagName className={className}>{value}</TagName>;
        }
    }
}

export default Field;
