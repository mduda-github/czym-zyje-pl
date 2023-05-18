import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";

const getStaticData = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const jsonDirectory = path.join(process.cwd(), "json");
    const fileContents = await fs.readFile(
      jsonDirectory + "/termsConditions.json",
      "utf8"
    );
    res.status(200).json(fileContents);
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
};

export default getStaticData;
