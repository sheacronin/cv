import React from 'react';
import '../styles/Information.css';
import Field from './Field';
import Section from './Section';
import uniqid from 'uniqid';
import DeleteButton from './DeleteButton';

function Information() {
    return (
        <Section
            sectionTitle="Information"
            items={[
                genericItemFactory('First Last', 'name'),
                genericItemFactory('firstlast@example.com', 'email'),
                genericItemFactory('123-456-7890', 'phoneNumber'),
            ]}
            ItemTag={InfoItem}
            itemFactory={() => genericItemFactory('Link', 'link')}
            hideTitle={true}
        />
    );
}

function genericItemFactory(text, type) {
    return {
        text: text,
        type: type,
        id: uniqid(),
    };
}

function InfoItem(props) {
    const { isEditable, item, handleChange, handleDeleteClick } = props;

    return (
        <span className={item.type}>
            {item.type !== 'email' && item.type !== 'name' && <Seperator />}
            {isEditable && item.type === 'link' && (
                <DeleteButton onClick={handleDeleteClick} fieldId={item.id} />
            )}
            <Field
                isEditable={isEditable}
                value={item.text}
                handleChange={handleChange}
                itemId={item.id}
                attribute={'text'}
            />
        </span>
    );
}

function Seperator() {
    return <span className="seperator"> | </span>;
}

export default Information;
