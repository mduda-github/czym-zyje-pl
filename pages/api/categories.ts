import { Category, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const getCategories = async (
  req: NextApiRequest,
  res: NextApiResponse<Category[]>
) => {
  const { includeTeasers } = req.query;

  const categories = await prisma.category.findMany({
    orderBy: {
      id: "asc",
    },
    include: includeTeasers
      ? {
          Teaser: {
            take: 3,
            select: {
              id: true,
              imageUrl: true,
              slug: true,
              title: true,
            },
          },
        }
      : undefined,
  });
  res.status(200).json(categories);
};

export default getCategories;
