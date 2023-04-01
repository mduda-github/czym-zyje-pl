import * as React from 'react'
import styles from './CategoryTeaser.module.css'

export interface CategoryTeaserProps {
    imageUrl: string;
    title: string;
}

const CategoryTeaser: React.FunctionComponent<CategoryTeaserProps> = (props) => {
    const { title, imageUrl } = props;
    return <div className={styles.container}>
        <img src={imageUrl} className={styles.image} />
        <div className={styles.textWrapper}>
            <h3 className={styles.title}>{title}</h3>
        </div>
    </div>
}

export default CategoryTeaser;