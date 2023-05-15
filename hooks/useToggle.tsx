import * as React from 'react';

export const useToggle = (): [string, () => void] => {
    const [isOn, setIsOn] = React.useState(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            console.log(window.localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"))
            return window.localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        }
        return "light"
    });

    const toggler = () => {
        setIsOn(isOn === 'light' ? 'dark' : 'light')
    };

    return [isOn, toggler]
};