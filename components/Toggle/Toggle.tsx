import * as React from "react";
import clsx from "clsx";
import styles from "./Toggle.module.css";
import { useToggle } from "@/hooks/useToggle";

const Toggle: React.FunctionComponent = () => {
    const [toggleValue, toggle] = useToggle();

    React.useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const currentTheme = document.documentElement.getAttribute("data-theme");
            let targetTheme = "light";

            if (currentTheme === "light") {
                targetTheme = "dark";
            }

            document.documentElement.setAttribute('data-theme', targetTheme)
            localStorage.setItem('theme', targetTheme);
        }
    }, [toggleValue])

    return (
        <div
            className={clsx(styles.container, {
                [styles.active]: toggleValue === "dark",
            })}
            onClick={toggle}
        >
            <div className={styles.switch} />
        </div>
    );
};

export default Toggle;
