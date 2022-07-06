import { ResponseType } from "@astra/types";

/**
 * Sends a GET request to the API for getting the nonce that the user needs to sign
 * @param address the address of the account to get the nonce for
 */
export async function getSignMessage(address: string): Promise<string> {
  const res = await fetch(`/api/account/nonce?address=${address}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data: ResponseType<{ nonce: string }> = await res.json();
  return data.data.nonce;
}
