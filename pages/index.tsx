import Page from '@/components/templates/Page/Page'
import styles from './index.module.css'
import HomeTeaser from '@/components/molecules/HomeTeaser/HomeTeaser'
import Section from '@/components/molecules/Section/Section'
import SmallTeaser from '@/components/molecules/SmallTeaser/SmallTeaser'
import NavigationBar from '@/components/organisms/NavigationBar/NavigationBar'
import Categories from '@/components/molecules/Categories/Categories'
import { fetcher } from '@/utils/fetcher'
import useSWR from 'swr'
import { Category, Teaser } from '@prisma/client'
import { TeaserDTO } from './api/teasers'
import { useIntl } from 'react-intl'
import SearchBar from '@/components/molecules/SearchBar/SearchBar'

interface CategoryWithTeasers extends Category {
  Teaser: Teaser[]
}

const Home: React.FunctionComponent = () => {
  const { data: categoriesData } = useSWR<CategoryWithTeasers[], Error>('/api/categories?includeTeasers=true', fetcher)
  const { data: teasersData } = useSWR<TeaserDTO[], Error>('/api/teasers?take=3', fetcher)

  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.index.title" });
  const description = intl.formatMessage({ id: "page.index.description" });
  const all = intl.formatMessage({ id: "page.index.all" });

  const allCategory = {
    id: 0,
    name: all,
    slug: '',
    symbol: '',
  }

  return (
    <>
      <Page title={title} subtitle={description} >
        <SearchBar />
        {categoriesData ? <Categories categories={[allCategory, ...categoriesData]} hrefPrefix={true} /> : <div>Loading...</div>}
        <div className={styles.homeTeasers}>
          {teasersData ? teasersData.map(({ id, title, imageUrl, category, slug }) => <HomeTeaser key={id} title={title} category={category.name} imageUrl={imageUrl} slug={slug} />) : <div>Loading...</div>}
        </div>
        {categoriesData ? categoriesData.map(category => <Section key={category.name} title={category.name} link={`/category/${category.slug}`}>
          {category.Teaser?.map(({ id, title, imageUrl, slug }) => <SmallTeaser key={id} title={title} category={category.name} imageUrl={imageUrl} slug={slug} />)}
        </Section>) : null}
      </Page>
      <NavigationBar />
    </>
  )
}


export default Home
