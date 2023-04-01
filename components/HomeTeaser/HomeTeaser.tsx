import * as React from 'react'
import styles from './HomeTeaser.module.css'

export interface HomeTeaserProps {
    title: string;
    category: string;
    imageUrl: string;
}

const HomeTeaser: React.FunctionComponent<HomeTeaserProps> = (props) => {
    const { title, category, imageUrl } = props;
    return <div className={styles.container} style={{backgroundImage: `url(${imageUrl})`}}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.title}>{title}</h3>
    </div>
}

export default HomeTeaser;