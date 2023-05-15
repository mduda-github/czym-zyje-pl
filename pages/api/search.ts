import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const getSearch = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const { q: query } = req.query;

      if (typeof query !== "string") {
        throw new Error("Invalid request");
      }

      const teasers = await prisma.teaser.findMany({
        where: {
          OR: [
            {
              title: {
                contains: query,
                mode: "insensitive",
              },
            },
          ],
        },
        include: {
          category: {
            select: {
              name: true,
            },
          },
        },
        take: 10,
      });

      res.status(200).json(teasers);
    } catch (err) {
      res.status(500).end();
    }
  }
};

export default getSearch;
