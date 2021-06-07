import { useState } from 'react';

// Custom hook for single field.
function useField(initValue) {
    const [field, setField] = useState(initValue);

    function handleFieldChange(e) {
        setField(e.target.value);
    }
    return { value: field, handleChange: handleFieldChange };
}

export default useField;
