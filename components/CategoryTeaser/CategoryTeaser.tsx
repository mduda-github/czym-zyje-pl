import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react'
import styles from './CategoryTeaser.module.css'

export interface CategoryTeaserProps {
    imageUrl: string;
    title: string;
    slug: string;
}

const CategoryTeaser: React.FunctionComponent<CategoryTeaserProps> = (props) => {
    const { title, imageUrl, slug } = props;
    return <Link href={`/article/${slug}`} className={styles.container}>
        <div className={styles.imageWrapper}>
            <Image src={imageUrl} layout="fill" alt={title} className={styles.image} />
        </div>
        <div className={styles.textWrapper}>
            <h3 className={styles.title}>{title}</h3>
        </div>
    </Link>
}

export default CategoryTeaser;