import jwt from "jsonwebtoken";
import { prisma } from "@astra/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { ASTRA_ACCESS_TOKEN } = req.cookies;

    if (ASTRA_ACCESS_TOKEN) {
      let user;

      try {
        const { id } = jwt.verify(ASTRA_ACCESS_TOKEN, process.env.JWT_SECRET);
        user = await prisma.user.findUnique({
          where: {
            id,
          },
        });
        if (!user) {
          throw new Error("Not real user");
        }
      } catch (err) {
        res.status(401).json({ errorCode: "Not authorized" });
      }
      return handler(req, res, user);
    }

    res.status(401).json({ errorCode: "jwt token required" });
  };
};
