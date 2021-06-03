import React, { useState, useReducer } from 'react';
import '../styles/Skills.css';
import uniqid from 'uniqid';
import Bullet from './Bullet';
import EditButton from './EditButton';
import SubmitButton from './SubmitButton';

function itemsReducer(state, action) {
    // Make a copy of items array.
    const newItems = [...state];

    switch (action.type) {
        case 'edit':
            // Find the item to change.
            const changingItem = newItems.find((item) => item.id === action.id);
            // Update the item's changing attribute with the new value.
            changingItem[action.attr] = action.value;
            return newItems;
        case 'add':
            return [...state, { text: 'Skill', id: uniqid() }];
        case 'delete':
            const deleteIndex = newItems.findIndex(
                (item) => item.id === action.id
            );
            // Mutate array copy by deleting selected skill.
            newItems.splice(deleteIndex, 1);
            return newItems;
        default:
            return state;
    }
}

function Skills() {
    const [isEditable, setIsEditable] = useState(false);
    function handleEditClick() {
        setIsEditable(true);
    }
    function handleSubmitClick() {
        setIsEditable(false);
    }

    // Push 6 default skill items into array.
    const initSkills = [];
    let n = 1;
    while (n <= 6) {
        initSkills.push({ text: 'Skill', id: uniqid() });
        n++;
    }
    const [skills, dispatch] = useReducer(itemsReducer, initSkills);

    return (
        <section id="skills">
            <h2>Skills</h2>
            {isEditable ? (
                <SubmitButton onClick={handleSubmitClick} />
            ) : (
                <EditButton onClick={handleEditClick} />
            )}
            <div>
                <ul>
                    {skills.map((skill) => (
                        <Bullet
                            key={skill.id}
                            isEditable={isEditable}
                            item={skill}
                            handleChange={(e) =>
                                dispatch({
                                    type: 'edit',
                                    id: skill.id,
                                    value: e.target.value,
                                    attr: 'text',
                                })
                            }
                            handleDeleteClick={(e) =>
                                dispatch({ type: 'delete', id: skill.id })
                            }
                            isMultiline={false}
                        />
                    ))}
                </ul>
                {isEditable && (
                    <button
                        className="new-item-btn"
                        onClick={() => dispatch({ type: 'add' })}
                    >
                        +
                    </button>
                )}
            </div>
            <hr />
        </section>
    );
}

export default Skills;
