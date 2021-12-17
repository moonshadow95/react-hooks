import { useEffect, useRef } from "react";

export const useHover = (onHover) => {
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("hover", onHover);
        }
        return () => {
            if (element.current) {
                element.current.removeEventListener("hover", onHover);
            };
        }
    }, []);
    return element;
};