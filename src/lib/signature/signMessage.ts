import { Web3Provider } from "@ethersproject/providers";
import { getSignMessage } from "./getSignMessage";

/**
 * sends a signature request to Metamask and returns the signature
 * @param publicKey the public key of the account to sign the message with
 * @param provider the Web3 provider to use
 */
export async function signMessage(
  provider: Web3Provider,
  publicKey: string
): Promise<[string, string]> {
  const message = await getSignMessage(publicKey);
  const signature: string = await provider.provider?.request({
    method: "personal_sign",
    params: [publicKey, message],
  });
  return [signature, message];
}
