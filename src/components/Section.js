import React, { Component } from 'react';
import '../styles/Experience.css';
import EditButton from './EditButton';
import SubmitButton from './SubmitButton';
import DeleteButton from './DeleteButton';
import Field from './Field';
import uniqid from 'uniqid';

// Making Section for Skills, Experience, Activities
export class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditable: false,
            items: props.items,
        };
    }

    handleChange = (e) => {
        const { items } = this.state;

        // Make a copy of items array.
        const newItems = items;
        const changeIndex = items.findIndex(
            (item) => item.id === e.target.className
        );
        const changedItem = { text: e.target.value, id: e.target.className };
        // Replace changed item obj in array copy.
        newItems.splice(changeIndex, 1, changedItem);

        this.setState({
            items: newItems,
        });
    };

    handleAddFieldClick = () => {
        const newItem = { text: 'Skill', id: uniqid() };
        this.setState({
            items: [...this.state.items, newItem],
        });
    };

    handleEditClick = () => {
        this.setState({
            isEditable: true,
        });
    };

    handleDeleteClick = (e) => {
        const { items } = this.state;

        // Make a copy of items array.
        const newItems = items;
        const deleteIndex = items.findIndex(
            (item) => item.id === e.currentTarget.dataset.field
        );
        // Mutate array copy by deleting selected skill.
        newItems.splice(deleteIndex, 1);

        this.setState({
            items: newItems,
        });
    };

    handleSubmitClick = () => {
        this.setState({
            isEditable: false,
        });
    };

    render() {
        const { isEditable, items } = this.state;
        const { sectionTitle, ItemTag } = this.props;

        return (
            <section id={sectionTitle.toLowerCase()}>
                <h2>{sectionTitle}</h2>
                {isEditable ? (
                    <SubmitButton onClick={this.handleSubmitClick} />
                ) : (
                    <EditButton onClick={this.handleEditClick} />
                )}
                <ul>
                    {items.map((item) => (
                        <ItemTag
                            key={item.id}
                            isEditable={isEditable}
                            item={item}
                        />
                    ))}
                </ul>
                {isEditable && (
                    <button id="new-skill" onClick={this.handleAddFieldClick}>
                        +
                    </button>
                )}
                <hr />
            </section>
        );
    }
}

export default Section;
