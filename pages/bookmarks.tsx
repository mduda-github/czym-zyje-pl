import EmptyStateBookmarks from "@/components/EmptyStateBookmarks/EmptyStateBookmarks";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import Page from "@/components/Page/Page";
import SmallTeaser from "@/components/SmallTeaser/SmallTeaser";
import { fetcher } from "@/utils/fetcher";
import { useIntl } from "react-intl";
import useSWR from "swr";
import { TeaserDTO } from "./api/teasers";

const Bookmarks: React.FunctionComponent = () => {
    const { data: teasersData, error: teasersError, isLoading } = useSWR<TeaserDTO[], Error>(
        "/api/teasers",
        fetcher
    );

    const intl = useIntl();
    const title = intl.formatMessage({ id: "page.bookmarks.title" });
    const subtitle = intl.formatMessage({ id: "page.bookmarks.description" });

    return (<>
        <Page title={title} subtitle={subtitle}>
            {
                teasersData ?
                    teasersData.map(({ title, category, imageUrl, slug }, index) =>
                        <SmallTeaser key={index} title={title} category={category.name} imageUrl={imageUrl} slug={slug} />
                    ) :
                    <EmptyStateBookmarks />
            }
        </Page>
        <NavigationBar />
    </>
    );
}

export default Bookmarks