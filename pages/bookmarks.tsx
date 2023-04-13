import EmptyStateBookmarks from "@/components/EmptyStateBookmarks/EmptyStateBookmarks";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Page from "@/components/Page/Page";
import SmallTeaser from "@/components/SmallTeaser/SmallTeaser";
import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";
import { TeaserDTO } from "./api/teasers";

const Bookmarks: React.FunctionComponent = () => {
    const { data: teasersData, error: teasersError, isLoading } = useSWR<TeaserDTO[], Error>(
        "/api/teasers",
        fetcher
    );
    return (<>
        <Page title="Bookmarks" subtitle='Saved articles to the library'>
            {teasersData ?
                teasersData.map(({ title, category, imageUrl }, index) =>
                    <SmallTeaser key={index} title={title} category={category.name} imageUrl={imageUrl} />
                ) :
                <EmptyStateBookmarks />
            }
        </Page>
        <NavigationBar />
    </>
    );
}

export default Bookmarks