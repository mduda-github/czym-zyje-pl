import { BookIcon } from '@/icons/BookIcon';
import * as React from 'react'
import { FormattedMessage } from 'react-intl';
import styles from './EmptyStateBookmarks.module.css'

const EmptyStateBookmarks: React.FunctionComponent = () => {
    return <div className={styles.container}>
        <span className={styles.iconWrapper}>
            <BookIcon />
        </span>
        <p className={styles.text}>
            <FormattedMessage id="page.bookmarks.emptyState" />
        </p>
    </div>
}

export default EmptyStateBookmarks;