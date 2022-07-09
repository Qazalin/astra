import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "lib/prisma";
import { ResponseType } from "@astra/types";
import { verifySig, addressValidityCheck } from "@astra/lib/signature";
import { ACCESS_COOKIE } from "@astra/lib/constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType<{ uid: string }>>
) {
  // address validity check
  const {
    address: _address,
    signature: _signature,
    message: _message,
  } = req.query;

  const [address, signature, message] = addressValidityCheck(
    _address,
    _signature,
    _message,
    res
  );

  // verify the signature
  const isValid = verifySig(address, signature, message);
  if (!isValid) {
    res.status(401).json({
      errorCode: 1,
      message: "invalid signature",
    });
  }

  // create a user or login the user
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
    // `Error: User already exists`
    user = await prisma.user.findUnique({
      where: {
        address,
      },
    });
  }

  if (user) {
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
      cookie.serialize(ACCESS_COOKIE, token, {
        httpOnly: true,
        maxAge: 8 * 60 * 60,
        path: "/",
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      })
    );

    res.json({
      errorCode: 0,
      data: user,
    });
  }

  res
    .status(401)
    .json({ errorCode: 1, message: "Invalid signature or address" });
}
