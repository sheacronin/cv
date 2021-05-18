import React, { Component } from 'react';
import EditButton from './EditButton';
import SubmitButton from './SubmitButton';

// Making Section for Skills, Experience, Activities
class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditable: false,
        };
    }

    handleEditClick = () => {
        this.setState({
            isEditable: true,
        });
    };

    handleSubmitClick = () => {
        this.setState({
            isEditable: false,
        });
    };

    render() {
        const { isEditable } = this.state;
        const {
            sectionTitle,
            ItemTag,
            items,
            itemFactory,
            isLastSection,
            hideTitle,
        } = this.props;

        return (
            <section id={sectionTitle.toLowerCase()}>
                {!hideTitle && <h2>{sectionTitle}</h2>}
                {isEditable ? (
                    <SubmitButton onClick={this.handleSubmitClick} />
                ) : (
                    <EditButton onClick={this.handleEditClick} />
                )}
                <ItemsList
                    isEditable={isEditable}
                    ItemTag={ItemTag}
                    items={items}
                    itemFactory={itemFactory}
                />
                {!isLastSection && <hr />}
            </section>
        );
    }
}

export class ItemsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
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

    render() {
        const { isEditable, ItemTag } = this.props;
        const { items } = this.state;

        return (
            <div>
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
                    <button
                        className="new-item-btn"
                        onClick={this.handleAddFieldClick}
                    >
                        +
                    </button>
                )}
            </div>
        );
    }
}

export default Section;
