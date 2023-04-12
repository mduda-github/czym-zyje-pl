import Head from 'next/head'
import Page from '@/components/Page/Page'
import Input from '@/components/Input/Input'
import { SearchIcon } from '@/icons/SearchIcon'
import styles from './index.module.css'
import { teasers } from '@/mocks/teasers'
import HomeTeaser from '@/components/HomeTeaser/HomeTeaser'
import Section from '@/components/Section/Section'
import SmallTeaser from '@/components/SmallTeaser/SmallTeaser'
import NavigationBar from '@/components/NavigationBar/NavigationBar'
import Categories from '@/components/Categories/Categories'
import { useEffect, useState } from 'react'
import { getData } from '@/utils/getData'

const Home: React.FunctionComponent = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getData('/api/categories').then(data => setCategories(data));
  }, [])

  return (
    <>
      <Page title='Browse' subtitle='Discover things of this world' >
        <Input type='search' placeholder='Search' Icon={SearchIcon} />
        <Categories categories={categories} hrefPrefix={true} />
        <div className={styles.homeTeasers}>
          {teasers.map(({ title, category, imageUrl }, index) => <HomeTeaser key={index} title={title} category={category} imageUrl={imageUrl} />)}
        </div>
        <Section title="Recommended for you" link="/recommended">
          {teasers.map(({ title, category, imageUrl }, index) => <SmallTeaser key={index} title={title} category={category} imageUrl={imageUrl} />)}
        </Section>
      </Page>
      <NavigationBar />
    </>
  )
}


export default Home
