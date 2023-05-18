import * as React from "react";
import clsx from "clsx";
import styles from "./Toggle.module.css";

// const getStoredTheme = (): string => {
//     if (typeof window !== 'undefined' && window.localStorage) {
//         return window.localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
//     }
//     return "light"
// }

// const saveTheme = (): void => {
//     if (typeof window !== 'undefined' && window.localStorage) {
//         const currentTheme = document.documentElement.getAttribute("data-theme");
//         let targetTheme = "light";

//         if (currentTheme === "light") {
//             targetTheme = "dark";
//         }

//         document.documentElement.setAttribute('data-theme', targetTheme)
//         localStorage.setItem('theme', targetTheme);
//     }
// }

export interface ToggleProps {
    theme: string;
    handleThemeToggle: () => {}
}

const Toggle: React.FunctionComponent<ToggleProps> = (props) => {
    const { theme, handleThemeToggle } = props;

    return (
        <div
            className={clsx(styles.container, {
                [styles.active]: theme === "dark",
            })}
            onClick={handleThemeToggle}
        >
            <div className={styles.switch} />
        </div>
    );
};

export default Toggle;
