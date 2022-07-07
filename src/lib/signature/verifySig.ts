import { ethers } from "ethers";

/**
 * Verifies a signature based on a message and a public key
 * @param address the public key of the account to sign the message with
 * @param signature the signature to verifySig
 * @param message the message to verifySig
 */
export function verifySig(
  address: string,
  signature: string,
  message: string
): boolean {
  try {
    const signerAddr = ethers.utils.verifyMessage(message, signature);
    if (signerAddr !== address) {
      return false;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
}
