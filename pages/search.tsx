import Page from '@/components/templates/Page/Page'
import SmallTeaser from '@/components/molecules/SmallTeaser/SmallTeaser'
import NavigationBar from '@/components/organisms/NavigationBar/NavigationBar'
import { fetcher } from '@/utils/fetcher'
import useSWR from 'swr'
import Error from 'next/error'
import { TeaserDTO } from './api/teasers'
import SearchBar from '@/components/molecules/SearchBar/SearchBar'
import { useRouter } from 'next/router'

const SearchPage: React.FunctionComponent = () => {
    const router = useRouter();
    const { q } = router.query;

    const encodedSearchQuery = encodeURI(q?.toString() || "");
    const { data, isLoading, error } = useSWR<TeaserDTO[], Error>(`/api/search?q=${encodedSearchQuery}`, fetcher)

    return (
        <>
            <Page title='Search' subtitle="We've found these for you" >
                <SearchBar />
                {isLoading ? <div>Loading...</div> : null}
                {error ? <div>Failed to load data.</div> : null}
                {data ? data.map(({ id, title, imageUrl, slug, category }) => <SmallTeaser
                    key={id}
                    title={title}
                    category={category.name}
                    imageUrl={imageUrl}
                    slug={slug} />) : null}
                {data && data.length === 0 ? <div>Ni ma.</div> : null}
            </Page>
            <NavigationBar />
        </>
    )
}


export default SearchPage
