import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const salt = bcrypt.genSaltSync();
  const { address, signature } = req.body;

  let user: any;

  try {
    user = await prisma.user.create({
      data: {
        address,
        signature: bcrypt.hashSync(signature, salt),
      },
    });
  } catch (e) {
    res.status(400);
    res.json({ error: "User already exists" });
  }

  const token = jwt.sign(
    {
      address: user.address,
      id: user.id,
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
};
