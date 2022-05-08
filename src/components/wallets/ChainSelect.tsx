import { CHAINS } from "@astra/lib";
import { Select } from "@chakra-ui/react";

export function ChainSelect({
  chainId,
  switchChain,
  displayDefault,
  chainIds,
}: {
  chainId: number;
  switchChain: (chainId: number) => void | undefined;
  displayDefault: boolean;
  chainIds: number[];
}) {
  return (
    <Select
      value={chainId}
      onChange={(event) => {
        switchChain?.(Number(event.target.value));
      }}
      disabled={switchChain === undefined}
    >
      {displayDefault ? <option value={-1}>Default Chain</option> : null}
      {chainIds.map((chainId) => (
        <option key={chainId} value={chainId}>
          {CHAINS[chainId]?.name ?? chainId}
        </option>
      ))}
    </Select>
  );
}
