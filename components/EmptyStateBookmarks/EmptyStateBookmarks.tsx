import { BookIcon } from '@/icons/BookIcon';
import * as React from 'react'
import styles from './EmptyStateBookmarks.module.css'

const EmptyStateBookmarks: React.FunctionComponent = () => {
    return <div className={styles.container}>
        <span className={styles.iconWrapper}>
            <BookIcon />
        </span>
        <p className={styles.text}>
            You haven&apos;t saved any articles yet. Start reading and bookmarking them now.
        </p>
    </div>
}

export default EmptyStateBookmarks;