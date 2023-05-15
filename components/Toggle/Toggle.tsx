import * as React from "react";
import clsx from "clsx";
import styles from "./Toggle.module.css";


const getStoredTheme = (): string => {
    if (typeof window !== 'undefined' && window.localStorage) {
        return window.localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    }
    return "light"
}

const saveTheme = (): void => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        let targetTheme = "light";

        if (currentTheme === "light") {
            targetTheme = "dark";
        }

        document.documentElement.setAttribute('data-theme', targetTheme)
        localStorage.setItem('theme', targetTheme);
    }
}

const Toggle: React.FunctionComponent = () => {
    const [theme, setTheme] = React.useState(getStoredTheme());

    const toggleTheme = (): void => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    React.useEffect(() => saveTheme(), [theme])

    return (
        <div
            className={clsx(styles.container, {
                [styles.active]: theme === "dark",
            })}
            onClick={toggleTheme}
        >
            <div className={styles.switch} />
        </div>
    );
};

export default Toggle;
