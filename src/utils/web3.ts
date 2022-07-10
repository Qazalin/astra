// utils related to web3 stuff

export function addressFormatter(addr: string): string {
  return addr.slice(0, 4) + "..." + addr.slice(-2);
}
