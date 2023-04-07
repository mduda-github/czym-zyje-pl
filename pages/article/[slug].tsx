import Head from "next/head";
import styles from './Article.module.css'
import { useRouter } from "next/router";
import { LeftArrowIcon } from "@/icons/LeftArrowIcon";
import { BookmarkIcon } from "@/icons/BookmarkIcon";
import { ShareIcon } from "@/icons/ShareIcon";
import Pill from "@/components/Pill/Pill";

const Article: React.FunctionComponent = () => {
    const { query } = useRouter();
    const { slug } = query;
    return (
        <>
            <div className={styles.header}>
                <div className={styles.nav}>
                    <div className={styles.row}>
                        <LeftArrowIcon />
                        <BookmarkIcon />
                    </div>
                    <ShareIcon className={styles.icon} />
                </div>
                <div className={styles.textWrapper}>
                    <Pill className={styles.pill} href={`category/politics`} isActive={true} title="US Election" />
                    <h2 className={styles.title}>The latest situation in the presidential election</h2>
                </div>
            </div>
            <div className={styles.content}>
                <h3>Results</h3>
                <p>Leads in individual states may change from one party to another as all the votes are counted.
                    Select a state for detailed results, and select the Senate, House or Governor tabs to view those races. </p>
                <br />
                <p>For more detailed state results click on the States A-Z links at the bottom of this page.
                    Results source: NEP/Edison via Reuters.
                </p>
                <br />
                <img src="https://picsum.photos/350/192?random=2" alt="" />
                <br />
                <h3>Results</h3>
                <p>Leads in individual states may change from one party to another as all the votes are counted.
                    Select a state for detailed results, and select the Senate, House or Governor tabs to view those races. </p>
                <br />
                <p>For more detailed state results click on the States A-Z links at the bottom of this page.
                    Results source: NEP/Edison via Reuters.
                </p>
                <br />
                <p>Leads in individual states may change from one party to another as all the votes are counted.
                    Select a state for detailed results, and select the Senate, House or Governor tabs to view those races. </p>
                <br />
                <p>For more detailed state results click on the States A-Z links at the bottom of this page.
                    Results source: NEP/Edison via Reuters.
                </p>
            </div>
        </>
    );
};

export default Article;
