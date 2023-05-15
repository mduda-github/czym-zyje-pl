import { PrismaClient, Teaser } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const getTeaserById = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  try {
    const teaser = await prisma.teaser.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        category: {
          select: {
            name: true,
            slug: true,
          },
        },
      },
    });

    res.status(200).json(teaser);
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
};

export default getTeaserById;
