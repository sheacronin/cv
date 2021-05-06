import React, { Component } from 'react';

class Field extends Component {
    render() {
        const { isEditable, value, TagName } = this.props;
        if (isEditable) {
            return <input type="text" value={value} />;
        } else {
            return <TagName>{value}</TagName>;
        }
    }
}

export default Field;
