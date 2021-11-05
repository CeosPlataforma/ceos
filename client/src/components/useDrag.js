import { useState } from "react";

export const useDrag = () => {
    const [drag, setDrag] = useState(true);

    const toggleDrag = () => {
        drag === false ? setDrag(true) : setDrag(false);
    }

    return [drag, toggleDrag];
}