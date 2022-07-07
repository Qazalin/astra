import { NextApiResponse } from "next";

export const addressValidityCheck = (
  address: string | string[],
  signature: string | string[],
  message: string | string[],
  res: NextApiResponse
): [string, string, string] => {
  if (!address || !signature || !message) {
    res.status(401).json({
      errorCode: 1,
      errorMsg: "address and/or signature and/or message is required",
    });
  }
  if (
    typeof address !== "string" ||
    typeof signature !== "string" ||
    typeof message !== "string"
  ) {
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

  return [address, signature, message];
};
