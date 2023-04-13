import { Category } from "@prisma/client";


export const prepareCategories = (categories: Category[] = [], param: string) => {
    const foundIndex = categories.findIndex(el => el.slug === param);
    const isFound = foundIndex !== -1;
    if (isFound) {
        const element = categories[foundIndex];
        categories.splice(foundIndex, 1);
        categories.unshift(element)
    }
    return { isFound, sortedCategories: categories }
};