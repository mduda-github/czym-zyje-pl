import { Category, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const getCategories = async (
  req: NextApiRequest,
  res: NextApiResponse<Category[]>
) => {
  const categories = await prisma.category.findMany();
  res.status(200).json(categories);
};

export default getCategories;
