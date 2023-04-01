import Image from 'next/image';
import * as React from 'react'
import styles from './SmallTeaser.module.css'

export interface SmallTeaserProps {
    imageUrl: string;
    category: string;
    title: string;
}

const SmallTeaser: React.FunctionComponent<SmallTeaserProps> = (props) => {
    const { imageUrl, category, title } = props;
    return <div className={styles.container}>
        <img className={styles.image} src={imageUrl} alt={title}/>
        <div className={styles.textContainer}>
            <span className={styles.category}>{category}</span>
            <h3 className={styles.title}>{title}</h3>
        </div>
    </div>
}

export default SmallTeaser;