import type { NextApiRequest, NextApiResponse } from "next";
import { categories, Category } from "../../mocks/categories";

const getCategories = (
  req: NextApiRequest,
  res: NextApiResponse<Category[]>
) => {
  res.status(200).json(categories);
};

export default getCategories;
