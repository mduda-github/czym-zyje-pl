import * as React from 'react'
import Pill from '../Pill/Pill';
import styles from './Categories.module.css'

export interface CategoriesProps {
    categories: string[];
    firstCategory?: string;
    hrefPrefix?: boolean;
}

const Categories: React.FunctionComponent<CategoriesProps> = (props) => {
    const { firstCategory, categories, hrefPrefix } = props;

    return <div className={styles.categories}>
        {firstCategory ? (
            <Pill
                title={firstCategory}
                href={`${hrefPrefix ? "category/" : ''}${firstCategory.toLowerCase()}`}
                isActive
            />
        ) : (
            <Pill title="All" isActive href="/" />
        )}
        {categories.map((categoryElement, index) => (
            <Pill
                key={index}
                href={`${hrefPrefix ? "category/" : ''}${categoryElement.toLowerCase()}`}
                title={categoryElement}
            />
        ))}
    </div>
}

export default Categories;