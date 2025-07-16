import { useState, useCallback } from "react";

function useToggle(initialValue: boolean): [boolean, () => void] {
    const [value, setValue] = useState<boolean>(initialValue);

    const toggle = useCallback(() => {
        setValue(prev => !prev);
    }, []);

    return [value, toggle];
}

export default useToggle;

