import * as React from "react";
import styles from "./Button.module.css";

export interface ButtonProps {
    title: string;
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
    const { title } = props;
    return <button className={styles.wrapper} {...props}>{title}</button>
};

export default Button;
