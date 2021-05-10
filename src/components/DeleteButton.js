import React from 'react';

const DeleteButton = (props) => {
    const { onClick } = props;
    return (
        <button onClick={onClick} className="delete-btn">
            Delete
        </button>
    );
};

export default DeleteButton;
