import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "lib/prisma";
import { ResponseType } from "@astra/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType<{ uid: string }>>
) {
  // address validity check
  const { address, signature } = req.query;
  if (!address || !signature) {
    res.status(401).json({
      errorCode: 1,
      errorMsg: "address and/or signature is required",
    });
  }
  if (typeof address !== "string" || typeof signature !== "string") {
    res.status(401).json({
      errorCode: 1,
      errorMsg: "address and/or signature should be a string",
    });
    throw new Error();
  }
  if (!address.startsWith("0x") || address.length !== 42) {
    res.status(401).json({
      errorCode: 1,
      errorMsg: `invalid address ${address}`,
    });
  }

  // create a user

  const salt = bcrypt.genSaltSync();
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
    res.json({ errorCode: 1, errorMsg: `Error: ${e}` });
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
  res.status(400).json(user);
}
