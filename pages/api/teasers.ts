import { Teaser, teasers } from "@/mocks/teasers";
import type { NextApiRequest, NextApiResponse } from "next";

const getTeasers = (req: NextApiRequest, res: NextApiResponse<Teaser[]>) => {
  res.status(200).json(teasers);
};

export default getTeasers;
