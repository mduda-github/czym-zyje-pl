import Page from "@/components/Page/Page";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import styles from "./categories.module.css";
import Tile from "@/components/Tile/Tile";
import useSWR from 'swr'
import { fetcher } from "@/utils/fetcher";
import { Category } from "@prisma/client";

const Categories: React.FunctionComponent = () => {
    const { data, error } = useSWR('/api/categories', fetcher)

    return (
        <>
            <Page
                title="Categories"
                subtitle="Thousands of articles in each category"
            >
                <div className={styles.container}>
                    {error ? <div>An error occured.</div> : null}

                    {data ? data.map((category: Category, index: number) =>
                        index !== 0 ? (
                            <Tile
                                key={category.id}
                                type="primary"
                                category={category}
                                asLink
                            />
                        ) : null) : <div>Loading ...</div>
                    }
                </div>
            </Page>
            <NavigationBar />
        </>
    );
};

export default Categories;
