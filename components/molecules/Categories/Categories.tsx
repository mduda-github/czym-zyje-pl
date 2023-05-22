import { Category } from "@prisma/client";
import * as React from "react";
import Pill from "../../atoms/Pill/Pill";
import styles from "./Categories.module.css";

export interface CategoriesProps {
    categories: Category[];
    hrefPrefix?: boolean;
}

const Categories: React.FunctionComponent<CategoriesProps> = (props) => {
    const { categories, hrefPrefix } = props;

    return (
        <div className={styles.categories}>
            {categories.map((categoryElement: Category, index) => (
                <Pill
                    key={categoryElement.id}
                    href={`${hrefPrefix ? "category/" : ""}${categoryElement.slug}`}
                    title={categoryElement.name}
                    isActive={index === 0}
                />
            ))}
        </div>
    );
};

export default Categories;
