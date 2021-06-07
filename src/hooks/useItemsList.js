import { useReducer } from 'react';

function useItemsList(itemFactory, numberOfItems) {
    function itemsReducer(state, action) {
        // Make a copy of items array.
        const newItems = [...state];

        switch (action.type) {
            case 'edit':
                // Find the item to change.
                const changingItem = newItems.find(
                    (item) => item.id === action.id
                );
                console.log(changingItem);
                // Update the item's changing attribute with the new value.
                changingItem[action.attr] = action.value;
                return newItems;
            case 'add':
                return [...state, itemFactory()];
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

    const initItems = [];
    while (numberOfItems > 0) {
        initItems.push(itemFactory());
        numberOfItems--;
    }

    return useReducer(itemsReducer, initItems);
}

export default useItemsList;
