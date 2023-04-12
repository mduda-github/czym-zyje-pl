import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { categories, Category } from "../../mocks/categories";

const prisma = new PrismaClient();

const getCategories = async (req: NextApiRequest, res: NextApiResponse) => {
  const categories = await prisma.category.findMany();
  res.status(200).json(categories);
};

export default getCategories;
