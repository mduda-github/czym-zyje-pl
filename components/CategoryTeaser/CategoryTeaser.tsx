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
        <Image className={styles.image} src={imageUrl} alt={title} width={0} height={192} sizes="100vw" objectFit="cover" objectPosition='center' style={{ width: '100%' }} />
        <div className={styles.textWrapper}>
            <h3 className={styles.title}>{title}</h3>
        </div>
    </Link>
}

export default CategoryTeaser;