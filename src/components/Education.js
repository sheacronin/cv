import React from 'react';
import '../styles/Education.css';
import DeleteButton from './DeleteButton';
import Field from './Field';
import uniqid from 'uniqid';
import EditButton from './EditButton';
import SubmitButton from './SubmitButton';
import useEditable from '../hooks/useEditable';
import useItemsList from '../hooks/useItemsList';

function schoolFactory() {
    return {
        institution: 'Institution',
        gradDate: 'May 20XX',
        location: 'City, State',
        degree: 'B.X. in [ Major ]',
        id: uniqid(),
    };
}

function Education() {
    const [isEditable, handleEditClick] = useEditable();

    const [schools, dispatch] = useItemsList(schoolFactory, 1);

    return (
        <section id="education">
            <h2>Education</h2>
            {isEditable ? (
                <SubmitButton onClick={handleEditClick} />
            ) : (
                <EditButton onClick={handleEditClick} />
            )}
            {schools.map((school) => (
                <School
                    key={school.id}
                    isEditable={isEditable}
                    item={school}
                    handleChange={(e) =>
                        dispatch({
                            type: 'edit',
                            id: school.id,
                            value: e.target.value,
                            // Use class name because attr
                            // is listed there.
                            attr: e.target.className,
                        })
                    }
                    handleDeleteClick={() =>
                        dispatch({ type: 'delete', id: school.id })
                    }
                />
            ))}
            {isEditable && (
                <button
                    className="new-item-btn"
                    onClick={() => dispatch({ type: 'add' })}
                >
                    +
                </button>
            )}
            <hr />
        </section>
    );
}

function School(props) {
    const { item, isEditable, handleChange, handleDeleteClick } = props;

    return (
        <article className="school">
            {isEditable && (
                <DeleteButton onClick={handleDeleteClick} fieldId={item.id} />
            )}
            <h3>
                <Field
                    isEditable={isEditable}
                    value={item.institution}
                    handleChange={handleChange}
                    itemId={item.id}
                    attribute={'institution'}
                />
                {', '}
                <Field
                    isEditable={isEditable}
                    value={item.location}
                    handleChange={handleChange}
                    itemId={item.id}
                    attribute={'location'}
                />
            </h3>
            <Field
                isEditable={isEditable}
                value={item.degree}
                handleChange={handleChange}
                itemId={item.id}
                attribute={'degree'}
            />
            <div className="dates">
                <Field
                    isEditable={isEditable}
                    value={item.gradDate}
                    handleChange={handleChange}
                    itemId={item.id}
                    attribute={'gradDate'}
                />
            </div>
        </article>
    );
}

export default Education;
