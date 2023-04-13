import Page from "@/components/Page/Page";
import Input from "@/components/Input/Input";
import { SearchIcon } from "@/icons/SearchIcon";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { useRouter } from "next/router";
import CategoryTeaser from "@/components/CategoryTeaser/CategoryTeaser";
import { prepareCategories } from "@/utils/prepareCategories";
import Categories from "@/components/Categories/Categories";
import { fetcher } from "@/utils/fetcher";
import { Category } from "@prisma/client";
import useSWR from "swr";
import { TeaserDTO } from "../api/teasers";

const Category: React.FunctionComponent = () => {
  const { query } = useRouter();
  const { category } = query;
  const paramCategory = category?.toString().toLowerCase() || "";

  const { data: categoriesData, error: categoriesError } = useSWR<
    Category[],
    Error
  >("/api/categories", fetcher);
  const { data: teasersData, error: teasersError } = useSWR<TeaserDTO[], Error>(
    "/api/teasers",
    fetcher
  );

  const { isFound, sortedCategories } = prepareCategories(
    categoriesData,
    paramCategory
  );
  const pageTitle = isFound ? paramCategory : "Category";
  const pageSubtitle = isFound
    ? "Discover things of this world"
    : "Sorry, we haven't found the category you were looking for...";

  return (
    <>
      <Page title={pageTitle} subtitle={pageSubtitle}>
        <Input type="search" placeholder="Search" Icon={SearchIcon} />
        <Categories categories={sortedCategories} />
        {teasersData ? (
          teasersData.map(({ title, imageUrl }, index) => (
            <CategoryTeaser key={index} title={title} imageUrl={imageUrl} />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </Page>
      <NavigationBar />
    </>
  );
};

export default Category;
