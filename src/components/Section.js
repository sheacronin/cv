import React from 'react';
import EditButton from './EditButton';
import SubmitButton from './SubmitButton';
import useEditable from '../hooks/useEditable';
import useItemsList from '../hooks/useItemsList';

function Section(props) {
    const [isEditable, handleEditClick] = useEditable();
    const {
        sectionTitle,
        ItemTag,
        itemFactory,
        isLastSection,
        initNumOfItems,
    } = props;

    return (
        <section id={sectionTitle.toLowerCase()}>
            <h2>{sectionTitle}</h2>
            {isEditable ? (
                <SubmitButton onClick={handleEditClick} />
            ) : (
                <EditButton onClick={handleEditClick} />
            )}
            <ItemsList
                isEditable={isEditable}
                ItemTag={ItemTag}
                itemFactory={itemFactory}
                initNumOfItems={initNumOfItems}
            />
            {!isLastSection && <hr />}
        </section>
    );
}

function ItemsList(props) {
    const { itemFactory, initNumOfItems, isMultiline, isEditable, ItemTag } =
        props;

    const [items, dispatch] = useItemsList(itemFactory, initNumOfItems);

    return (
        <>
            {items.map((item) => (
                <ItemTag
                    key={item.id}
                    isEditable={isEditable}
                    item={item}
                    handleChange={(e) =>
                        dispatch({
                            type: 'edit',
                            id: item.id,
                            value: e.target.value,
                            attr: e.target.className,
                        })
                    }
                    handleDeleteClick={() =>
                        dispatch({ type: 'delete', id: item.id })
                    }
                    isMultiline={isMultiline}
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
        </>
    );
}

export default Section;
