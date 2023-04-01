import * as React from 'react'
import styles from './Input.module.css'

export interface InputProps {
    type: string;
    placeholder: string;
    Icon: React.ElementType; 
}

const Input: React.FunctionComponent<InputProps> = (props) => {
    const {type, placeholder, Icon}  = props;
    return <div className={styles.container}>
        <input className={styles.input} type={type} placeholder={placeholder} autoComplete="off"/>
        <Icon className={styles.icon}/>
    </div>
}

export default Input;