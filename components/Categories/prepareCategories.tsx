export const prepareCategories = (categories: string[], param: string) => {
    const formatedCategories = categories.map((category) =>
        category.substring(3)
    );
    const firstElement = formatedCategories.find(
        (category) => category.toLowerCase() === param
    );
    const filteredCategories = formatedCategories.filter(
        (category) => category.toLowerCase() !== param
    );
    return { firstElement, filteredCategories };
};