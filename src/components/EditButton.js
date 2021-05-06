import React from 'react';

const EditButton = (props) => {
    const { onClick } = props;
    return <button onClick={onClick}>Edit</button>;
};

export default EditButton;
