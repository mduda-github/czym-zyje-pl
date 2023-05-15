import * as React from 'react'
import styles from './Input.module.css'

export interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
    Icon: React.ElementType;
}

const Input: React.FunctionComponent<InputProps> = (props) => {
    const { type, placeholder, value, onChange, Icon } = props;
    return <div className={styles.container}>
        <input className={styles.input} value={value} onChange={(event) => onChange(event.target.value)} type={type} placeholder={placeholder} autoComplete="off" />
        <Icon className={styles.icon} />
    </div>
}

export default Input;