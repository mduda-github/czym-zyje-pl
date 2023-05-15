import { PrismaClient, Teaser } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export interface TeaserDTO extends Teaser {
  category: {
    name: string;
  };
}

const getTeasers = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const teasers = await prisma.teaser.findMany({
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
    });
    res.status(200).json(teasers);
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
};

export default getTeasers;
