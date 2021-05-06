import React from 'react';

const SubmitButton = (props) => {
    const { onClick } = props;
    return <button onClick={onClick}>Submit</button>;
};

export default SubmitButton;
