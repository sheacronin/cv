import React from 'react';
import uniqid from 'uniqid';
import Bullet from './Bullet';
import useItemsList from '../hooks/useItemsList';
import useEditable from '../hooks/useEditable';
import SubmitButton from './SubmitButton';
import EditButton from './EditButton';

const activityFactory = () => {
    return {
        text: 'Activity',
        id: uniqid(),
    };
};

function Activities() {
    const [isEditable, handleEditClick] = useEditable();
    const [activities, dispatch] = useItemsList(activityFactory, 2);

    return (
        <section id="activities">
            <h2>Activities</h2>
            {isEditable ? (
                <SubmitButton onClick={handleEditClick} />
            ) : (
                <EditButton onClick={handleEditClick} />
            )}
            <ul>
                {activities.map((activity) => (
                    <Bullet
                        key={activity.id}
                        isEditable={isEditable}
                        item={activity}
                        handleChange={(e) =>
                            dispatch({
                                type: 'edit',
                                id: activity.id,
                                value: e.target.value,
                                attr: 'text',
                            })
                        }
                        handleDeleteClick={() =>
                            dispatch({ type: 'delete', id: activity.id })
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
        </section>
    );
}

export default Activities;
