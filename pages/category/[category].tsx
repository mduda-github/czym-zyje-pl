import Head from "next/head";
import Page from "@/components/Page/Page";
import Input from "@/components/Input/Input";
import { SearchIcon } from "@/icons/SearchIcon";
import { Category } from "@/mocks/categories";
import { teasers } from "@/mocks/teasers";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { useRouter } from "next/router";
import CategoryTeaser from "@/components/CategoryTeaser/CategoryTeaser";
import { prepareCategories } from "@/utils/prepareCategories";
import Categories from "@/components/Categories/Categories";
import { useEffect, useState } from "react";
import { getData } from "@/utils/getData";

const Category: React.FunctionComponent = () => {
  const { query } = useRouter();
  const { category } = query;
  const paramCategory = category?.toString().toLowerCase() || "";

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getData('/api/categories').then(data => setCategories(data));
  }, [])

  const { isFound, sortedCategories } = prepareCategories(categories, paramCategory);
  const pageTitle = isFound ? paramCategory : "Category";
  const pageSubtitle = isFound
    ? "Discover things of this world"
    : "Sorry, we haven't found the category you were looking for...";

  return (
    <>
      <Page title={pageTitle} subtitle={pageSubtitle}>
        <Input type="search" placeholder="Search" Icon={SearchIcon} />
        <Categories categories={sortedCategories} />
        {teasers.smallTeasers.map(({ title, imageUrl }, index) => <CategoryTeaser key={index} title={title} imageUrl={imageUrl} />)}
      </Page>
      <NavigationBar />
    </>
  );
};

export default Category;
