import React, { Component } from 'react';

class Field extends Component {
    render() {
        const { isEditable, value, TagName, handleChange, id } = this.props;
        if (isEditable) {
            return (
                <input
                    id={id}
                    type="text"
                    value={value}
                    onChange={handleChange}
                />
            );
        } else {
            return <TagName>{value}</TagName>;
        }
    }
}

export default Field;
