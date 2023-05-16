import Page from "@/components/templates/Page/Page";
import NavigationBar from "@/components/organisms/NavigationBar/NavigationBar";
import styles from "./categories.module.css";
import Tile from "@/components/atoms/Tile/Tile";
import useSWR from 'swr'
import { fetcher } from "@/utils/fetcher";
import { Category } from "@prisma/client";
import { useIntl } from "react-intl";

export async function getServerSideProps() {
    const response = await fetch('http://localhost:3000/api/categories')

    if (!response) {
        return { props: {} }
    }

    const categories = await response.json();

    return {
        props: {
            categories,
        }
    }
}

export interface CategoriesProps {
    categories: Category[];
}

const Categories: React.FunctionComponent<CategoriesProps> = (props) => {
    const { categories } = props;
    const intl = useIntl();
    const title = intl.formatMessage({ id: "page.categories.title" });
    const subtitle = intl.formatMessage({ id: "page.categories.description" });

    return (
        <>
            <Page
                title={title}
                subtitle={subtitle}
            >
                <div className={styles.container}>
                    {categories ? categories.map((category: Category) => <Tile
                        key={category.id}
                        type="primary"
                        category={category}
                        asLink
                    />) : <div>Loading ...</div>
                    }
                </div>
            </Page>
            <NavigationBar />
        </>
    );
};

export default Categories;
