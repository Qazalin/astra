import { validateRoute } from "@astra/lib/auth";
import { NextApiRequest, NextApiResponse } from "next";

export default validateRoute(
  (req: NextApiRequest, res: NextApiResponse, user) => {
    res.json(user);
  }
);
