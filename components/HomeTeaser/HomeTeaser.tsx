import Link from 'next/link';
import * as React from 'react'
import styles from './HomeTeaser.module.css'

export interface HomeTeaserProps {
    title: string;
    category: string;
    imageUrl: string;
    slug: string;
}

const HomeTeaser: React.FunctionComponent<HomeTeaserProps> = (props) => {
    const { title, category, imageUrl, slug } = props;
    return <Link href={`/article/${slug}`} className={styles.container} style={{ backgroundImage: `url(${imageUrl})` }}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.title}>{title}</h3>
    </Link>
}

export default HomeTeaser;