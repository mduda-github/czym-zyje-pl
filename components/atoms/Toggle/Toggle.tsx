import * as React from "react";
import clsx from "clsx";
import styles from "./Toggle.module.css";

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
