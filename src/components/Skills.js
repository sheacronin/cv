import React from 'react';
import '../styles/Skills.css';
import uniqid from 'uniqid';
import Bullet from './Bullet';
import EditButton from './EditButton';
import SubmitButton from './SubmitButton';
import useEditable from '../hooks/useEditable';
import useItemsList from '../hooks/useItemsList';

const skillFactory = () => {
    return {
        text: 'Skill',
        id: uniqid(),
    };
};

function Skills() {
    const [isEditable, handleEditClick] = useEditable();

    const [skills, dispatch] = useItemsList(skillFactory, 6);

    return (
        <section id="skills">
            <h2>Skills</h2>
            {isEditable ? (
                <SubmitButton onClick={handleEditClick} />
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
                            handleDeleteClick={() =>
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
