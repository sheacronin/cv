import React, { Component } from 'react';
import EditButton from './EditButton';
import SubmitButton from './SubmitButton';

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
        const input = e.target;

        // Make a copy of items array.
        const newItems = items;

        // Find the item to change with the input's
        // item id data attribute.
        const changingItem = newItems.find(
            (item) => item.id === input.dataset.itemId
        );

        // Update the item's changing attribute (the input's className)
        // with the new value.
        changingItem[input.className] = input.value;

        this.setState({
            items: newItems,
        });
    };

    handleAddFieldClick = () => {
        const newItem = this.props.itemFactory();
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
                            handleChange={this.handleChange}
                            handleDeleteClick={this.handleDeleteClick}
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
