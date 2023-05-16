import { PrismaClient, Teaser } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export interface TeaserDTO extends Teaser {
  category: {
    name: string;
    slug: string;
  };
}

const getBookmarkedTeasers = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { b } = req.query;
  const bookmarks =
    b
      ?.toString()
      .split(",")
      .map((el) => Number(el)) || [];

  try {
    const teasers = await prisma.teaser.findMany({
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
      where: {
        id: { in: bookmarks },
      },
    });
    res.status(200).json(teasers);
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
};

export default getBookmarkedTeasers;
