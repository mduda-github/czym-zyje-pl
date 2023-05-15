import { PrismaClient, Teaser } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const getTeaserByCategoryId = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { categoryId } = req.query;

  try {
    const teasers = await prisma.teaser.findMany({
      include: {
        category: {
          select: {
            name: true,
            slug: true,
          },
        },
      },
      where: {
        categoryId: Number(categoryId),
      },
    });

    res.status(200).json(teasers);
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
};

export default getTeaserByCategoryId;
