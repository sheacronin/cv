import { useState } from 'react';

// Custom hook for edit button.
function useEditable() {
    const [isEditable, setIsEditable] = useState(false);

    function handleClick() {
        setIsEditable((prevState) => !prevState);
    }

    return [isEditable, handleClick];
}

export default useEditable;
