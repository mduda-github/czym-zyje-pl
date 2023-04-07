import EmptyStateBookmarks from "@/components/EmptyStateBookmarks/EmptyStateBookmarks";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Page from "@/components/Page/Page";
import SmallTeaser from "@/components/SmallTeaser/SmallTeaser";
import { teasers } from "@/pages/mocks/teasers";
import Head from "next/head";

const Bookmarks: React.FunctionComponent = () => {
    return (<>
        <Page title="Bookmarks" subtitle='Saved articles to the library'>
            {teasers ?
                teasers.smallTeasers.map(({ title, category, imageUrl }, index) =>
                    <SmallTeaser key={index} title={title} category={category} imageUrl={imageUrl} />
                ) :
                <EmptyStateBookmarks />
            }
        </Page>
        <NavigationBar />
    </>
    );
}

export default Bookmarks