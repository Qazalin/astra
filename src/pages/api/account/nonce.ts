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
  const nonce = Math.floor(Math.random() * 1e13);
  res.status(200).json({
    errorCode: 0,
    data: {
      nonce: `Welcome to Astra, please sign this message to login: ${nonce}`,
    },
  });
}
// fe020e5182d6b72da976558beac91617693c9827eb9a684b6143f9b6d7a4adbb
