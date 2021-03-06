import { useState } from "react";

export const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => {
        return setIsShowing(!isShowing);
    }
    
    return [isShowing, toggle];
}
