import React from 'react';

const SubmitButton = (props) => {
    const { onClick } = props;
    return (
        <button onClick={onClick} className="edit-submit-btn">
            Submit
        </button>
    );
};

export default SubmitButton;
