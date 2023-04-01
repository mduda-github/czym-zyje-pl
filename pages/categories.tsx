import Head from "next/head";
import Page from "@/components/Page/Page";
import { categories } from "@/mocks/categories";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import styles from './categories.module.css'
import Tile from "@/components/Tile/Tile";

const Categories: React.FunctionComponent = () => {
    return (
        <>
            <Head>
                <title>czym-zyje.pl - stay informed, stay ahead</title>
            </Head>
            <Page title="Categories" subtitle='Thousands of articles in each category'>
                <div className={styles.container}>
                    {categories.map((category, index) => <Tile key={index} type='primary' name={category} asLink />)}
                </div>
            </Page>
            <NavigationBar />
        </>
    );
};

export default Categories;
