import { NextApiRequest, NextApiResponse } from "next";
import { ResponseType } from "@astra/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType<{ nonce: string }>>
) {
  const addr = req.query.address;
  if (!addr) {
    res.status(401).json({
      errorCode: 1,
      errorMsg: "address is required",
    });
  }
  if (addr.slice(0, 2) !== "0x" || addr.length !== 42) {
    res.status(401).json({
      errorCode: 1,
      errorMsg: `invalid address ${addr}`,
    });
  }
  const nonce = Math.random() * 1e4;
  res.status(200).json({
    errorCode: 0,
    data: {
      nonce: `Welcome to Astra, please esign this message to login: ${nonce} your address is ${addr}`,
    },
  });
}
