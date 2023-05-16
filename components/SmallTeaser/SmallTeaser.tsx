import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react'
import styles from './SmallTeaser.module.css'

export interface SmallTeaserProps {
    imageUrl: string;
    category: string;
    title: string;
    slug: string;
}

const SmallTeaser: React.FunctionComponent<SmallTeaserProps> = (props) => {
    const { imageUrl, category, title, slug } = props;
    return <Link href={`article/${slug}`} className={styles.container}>
        <Image className={styles.image} src={imageUrl} alt={title} width={96} height={96} />
        <div className={styles.textContainer}>
            <span className={styles.category}>{category}</span>
            <h3 className={styles.title}>{title}</h3>
        </div>
    </Link>
}

export default SmallTeaser;