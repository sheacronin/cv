import React from 'react';
import '../styles/DeleteButton.css';
import deleteIcon from '../i/delete-icon.svg';

const DeleteButton = (props) => {
    const { onClick } = props;
    return (
        <button onClick={onClick} className="delete-btn">
            <img src={deleteIcon} alt="Delete icon" />
        </button>
    );
};

export default DeleteButton;
