import Page from '@/components/Page/Page'
import Input from '@/components/Input/Input'
import { SearchIcon } from '@/icons/SearchIcon'
import styles from './index.module.css'
import HomeTeaser from '@/components/HomeTeaser/HomeTeaser'
import Section from '@/components/Section/Section'
import SmallTeaser from '@/components/SmallTeaser/SmallTeaser'
import NavigationBar from '@/components/NavigationBar/NavigationBar'
import Categories from '@/components/Categories/Categories'
import { fetcher } from '@/utils/fetcher'
import useSWR from 'swr'
import { Category } from '@prisma/client'
import Error from 'next/error'
import { TeaserDTO } from './api/teasers'

const Home: React.FunctionComponent = () => {
  const { data: categoriesData, error: categoriesError } = useSWR<Category[], Error>('/api/categories', fetcher)
  const { data: teasersData, error: teasersError } = useSWR<TeaserDTO[], Error>('/api/teasers', fetcher)

  return (
    <>
      <Page title='Browse' subtitle='Discover things of this world' >
        <Input type='search' placeholder='Search' Icon={SearchIcon} />
        {categoriesData ? <Categories categories={categoriesData} hrefPrefix={true} /> : <div>Loading...</div>}
        <div className={styles.homeTeasers}>
          {teasersData ? teasersData.map(({ id, title, imageUrl, category }) => <HomeTeaser key={id} title={title} category={category.name} imageUrl={imageUrl} />) : <div>Loading...</div>}
        </div>
        <Section title="Recommended for you" link="/recommended">
          {teasersData ? teasersData.map(({ id, title, imageUrl, category }) => <SmallTeaser key={id} title={title} category={category.name} imageUrl={imageUrl} />) : <div>Loading...</div>}
        </Section>
      </Page>
      <NavigationBar />
    </>
  )
}


export default Home
