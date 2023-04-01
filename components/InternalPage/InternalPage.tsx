import { LeftArrowIcon } from '@/icons/LeftArrowIcon';
import Link from 'next/link';
import * as React from 'react'
import styles from './InternalPage.module.css'

export interface InternalPageProps {
    title: string;
    children: React.ReactNode;
}

const InternalPage: React.FunctionComponent<InternalPageProps> = (props) => {
    const { title, children } = props;
    return <div className={styles.container}>
        <div className={styles.nav}>
            <Link href="/profile"><LeftArrowIcon /></Link>
            <h1 className={styles.title}>{title}</h1>
        </div>
        {children}
    </div>
}

export default InternalPage;