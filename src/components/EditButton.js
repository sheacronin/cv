import React from 'react';
import '../styles/EditButton.css';

const EditButton = (props) => {
    const { onClick } = props;
    return (
        <button onClick={onClick} className="edit-submit-btn">
            Edit
        </button>
    );
};

export default EditButton;
