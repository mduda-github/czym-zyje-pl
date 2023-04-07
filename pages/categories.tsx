import Head from "next/head";
import Page from "@/components/Page/Page";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import styles from './categories.module.css'
import Tile from "@/components/Tile/Tile";
import { getData } from "@/utils/getData";
import { useEffect, useState } from "react";
import { Category } from "../mocks/categories";

const Categories: React.FunctionComponent = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getData('/api/categories').then(data => setCategories(data));
    }, [])

    return (
        <>
            <Page title="Categories" subtitle='Thousands of articles in each category'>
                <div className={styles.container}>
                    {categories.map((category: Category) => <Tile key={category.id} type='primary' name={category.name} asLink />)}
                </div>
            </Page>
            <NavigationBar />
        </>
    );
};

export default Categories;
