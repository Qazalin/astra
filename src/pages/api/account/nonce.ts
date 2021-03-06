import { NextApiRequest, NextApiResponse } from "next";
import { ResponseType } from "@astra/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType<{ nonce: string }>>
) {
  const address = req.query.address;
  // address validity check
  if (!address) {
    res.status(401).json({
      errorCode: 1,
      message: "address is required",
    });
  }
  if (address.slice(0, 2) !== "0x" || address.length !== 42) {
    res.status(401).json({
      errorCode: 1,
      message: `invalid address ${address}`,
    });
  }

  // generate a nonce
  const nonce = Math.floor(Math.random() * 1e13);

  // Send the nonce to the client
  res.status(200).json({
    errorCode: 0,
    data: {
      nonce: `Welcome to Astra, please sign this message to login: ${nonce}`,
    },
  });
}
