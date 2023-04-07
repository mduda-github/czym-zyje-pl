import * as React from "react";
import Pill from "../Pill/Pill";
import styles from "./Categories.module.css";
import { Category } from "@/mocks/categories";

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
