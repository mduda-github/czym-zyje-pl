import * as React from 'react'
import styles from './Page.module.css'

export interface PageProps {
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
}

const Page: React.FunctionComponent<PageProps> = (props) => {
    const {title, subtitle, children}  = props;
    return <div className={styles.container}>
        {title && <h1 className={styles.title}>{title}</h1>}
        {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
        {children}
    </div>
}

export default Page;