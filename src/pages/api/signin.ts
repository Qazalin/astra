import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { address, signature } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      address,
    },
  });

  if (user && bcrypt.compareSync(signature, user.signature)) {
    const token = jwt.sign(
      {
        is: user.id,
        address: user.address,
        time: Date.now(),
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "8h",
      }
    );

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("TOKEN", token, {
        httpOnly: true,
        maxAge: 8 * 60 * 60,
        path: "/",
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      })
    );
    res.json(user);
  }

  res.status(401);
  res.json({ error: "Invalid signature or address" });
};
