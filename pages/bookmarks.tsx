import EmptyStateBookmarks from "@/components/molecules/EmptyStateBookmarks/EmptyStateBookmarks";
import NavigationBar from "@/components/organisms/NavigationBar/NavigationBar";
import Page from "@/components/templates/Page/Page";
import ProfileButton from "@/components/atoms/ProfileButton/ProfileButton";
import SmallTeaser from "@/components/molecules/SmallTeaser/SmallTeaser";
import { fetcher } from "@/utils/fetcher";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import useSWR from "swr";
import { TeaserDTO } from "./api/teasers";

const getStoredBookmarks = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        return localStorage.getItem('bookmarks') || ""
    }
}

const clearStoredBookmarks = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        return localStorage.removeItem('bookmarks')
    }
}

const Bookmarks: React.FunctionComponent = () => {
    const router = useRouter();
    const storedBookmarks = getStoredBookmarks();
    const { data, error, isLoading } = useSWR<TeaserDTO[], Error>(
        `/api/bookmarks?b=${storedBookmarks}`,
        fetcher
    );

    const intl = useIntl();
    const title = intl.formatMessage({ id: "page.bookmarks.title" });
    const subtitle = intl.formatMessage({ id: "page.bookmarks.description" });

    const clearBookmarks = (): void => {
        clearStoredBookmarks();
        router.push('/bookmarks')
    }

    return (<>
        <Page title={title} subtitle={subtitle}>
            {isLoading ? <div>Loading...</div> : null}
            {
                data && data.length ?
                    <>
                        {data.map(({ title, category, imageUrl, slug }, index) =>
                            <SmallTeaser key={index} title={title} category={category.name} imageUrl={imageUrl} slug={slug} />
                        )}
                        <ProfileButton className="centered" title="Wyczyść zakładki" onClick={clearBookmarks}></ProfileButton>
                    </> :
                    null
            }
            {data && data.length === 0 ? <EmptyStateBookmarks /> : null}

        </Page>
        <NavigationBar />
    </>
    );
}

export default Bookmarks