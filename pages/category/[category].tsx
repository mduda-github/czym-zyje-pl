import Head from "next/head";
import Page from "@/components/Page/Page";
import Input from "@/components/Input/Input";
import { SearchIcon } from "@/icons/SearchIcon";
import { categories } from "@/mocks/categories";
import { teasers } from "@/mocks/teasers";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { useRouter } from "next/router";
import CategoryTeaser from "@/components/CategoryTeaser/CategoryTeaser";
import { prepareCategories } from "@/components/Categories/prepareCategories";
import Categories from "@/components/Categories/Categories";

const Category: React.FunctionComponent = () => {
  const { query } = useRouter();
  const { category } = query;
  const paramCategory = category?.toString().toLowerCase() || "";

  const { firstElement, filteredCategories } = prepareCategories(
    categories,
    paramCategory
  );
  const pageTitle = firstElement ? paramCategory : "Category";
  const pageSubtitle = firstElement
    ? "Discover things of this world"
    : "Sorry, we haven't found the category you were looking for...";

  return (
    <>
      <Head>
        <title>czym-zyje.pl - stay informed, stay ahead</title>
      </Head>
      <Page title={pageTitle} subtitle={pageSubtitle}>
        <Input type="search" placeholder="Search" Icon={SearchIcon} />
        <Categories firstCategory={firstElement} categories={filteredCategories} />
        {teasers.smallTeasers.map(({ title, imageUrl }, index) => <CategoryTeaser key={index} title={title} imageUrl={imageUrl} />)}
      </Page>
      <NavigationBar />
    </>
  );
};

export default Category;
