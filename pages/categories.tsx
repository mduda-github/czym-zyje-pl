import Page from "@/components/templates/Page/Page";
import NavigationBar from "@/components/organisms/NavigationBar/NavigationBar";
import styles from "./categories.module.css";
import Tile from "@/components/atoms/Tile/Tile";
import useSWR from 'swr'
import { fetcher } from "@/utils/fetcher";
import { Category } from "@prisma/client";
import { useIntl } from "react-intl";

const Categories: React.FunctionComponent = () => {
    const { data, error } = useSWR('/api/categories', fetcher)

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
