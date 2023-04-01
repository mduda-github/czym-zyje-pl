import * as React from "react";
import clsx from "clsx";
import styles from "./Toggle.module.css";
import { useToggle } from "@/hooks/useToggle";

const Toggle: React.FunctionComponent = () => {
    const [toggleValue, toggle] = useToggle(false);

    return (
        <div
            className={clsx(styles.container, {
                [styles.active]: toggleValue,
            })}
            onClick={toggle}
        >
            <div className={styles.switch} />
        </div>
    );
};

export default Toggle;
