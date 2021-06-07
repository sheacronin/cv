import React from 'react';
import '../styles/Experience.css';
import DeleteButton from './DeleteButton';
import Field from './Field';
import uniqid from 'uniqid';
import Bullet from './Bullet';
import EditButton from './EditButton';
import SubmitButton from './SubmitButton';
import useEditable from '../hooks/useEditable';
import useItemsList from '../hooks/useItemsList';

const jobFactory = () => {
    return {
        title: 'Job Title',
        employer: 'Employer',
        location: 'City, State',
        startDate: 'Start Date',
        endDate: 'Present',
        id: uniqid(),
    };
};

function Experience() {
    const [isEditable, handleEditClick] = useEditable();

    const [jobs, dispatch] = useItemsList(jobFactory, 2);

    return (
        <section id="experience">
            <h2>Experience</h2>
            {isEditable ? (
                <SubmitButton onClick={handleEditClick} />
            ) : (
                <EditButton onClick={handleEditClick} />
            )}
            {jobs.map((job) => (
                <Job
                    key={job.id}
                    isEditable={isEditable}
                    item={job}
                    handleChange={(e) =>
                        dispatch({
                            type: 'edit',
                            id: job.id,
                            value: e.target.value,
                            // Use class name because attr
                            // is listed there.
                            attr: e.target.className,
                        })
                    }
                    handleDeleteClick={() =>
                        dispatch({ type: 'delete', id: job.id })
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

const bulletFactory = () => {
    return {
        text: 'Bullet Point',
        id: uniqid(),
    };
};

function Job(props) {
    const { item, isEditable, handleChange, handleDeleteClick } = props;

    const [bullets, dispatch] = useItemsList(bulletFactory, 3);

    return (
        <article className="job">
            {isEditable && (
                <DeleteButton onClick={handleDeleteClick} fieldId={item.id} />
            )}
            <h3>
                <Field
                    isEditable={isEditable}
                    value={item.employer}
                    handleChange={handleChange}
                    itemId={item.id}
                    attribute={'employer'}
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
            <h4>
                <Field
                    isEditable={isEditable}
                    value={item.title}
                    handleChange={handleChange}
                    itemId={item.id}
                    attribute={'title'}
                />
            </h4>
            <div className="dates">
                <Field
                    isEditable={isEditable}
                    value={item.startDate}
                    handleChange={handleChange}
                    itemId={item.id}
                    attribute={'startDate'}
                />
                -
                <Field
                    isEditable={isEditable}
                    value={item.endDate}
                    handleChange={handleChange}
                    itemId={item.id}
                    attribute={'endDate'}
                />
            </div>
            <ul>
                {bullets.map((bullet) => (
                    <Bullet
                        key={bullet.id}
                        isEditable={isEditable}
                        item={bullet}
                        handleChange={(e) =>
                            dispatch({
                                type: 'edit',
                                id: bullet.id,
                                value: e.target.value,
                                attr: 'text',
                            })
                        }
                        handleDeleteClick={() =>
                            dispatch({ type: 'delete', id: bullet.id })
                        }
                        isMultiline={true}
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
        </article>
    );
}

export default Experience;
