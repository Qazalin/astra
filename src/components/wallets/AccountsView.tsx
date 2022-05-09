import { formatEther } from "@ethersproject/units";
import type { Web3ReactHooks } from "@web3-react/core";
import { useBalances } from "@astra/hooks";
import { Box, Stack } from "@chakra-ui/react";
import { AccountView } from "@astra/components";

export function AccountsView({
  accounts,
  provider,
  ENSNames,
}: {
  accounts: ReturnType<Web3ReactHooks["useAccounts"]>;
  provider: ReturnType<Web3ReactHooks["useProvider"]>;
  ENSNames: ReturnType<Web3ReactHooks["useENSNames"]>;
}) {
  const balances = useBalances(provider, accounts);

  if (accounts === undefined) return null;

  return (
    <Box w="100%" h="100%">
      {accounts.length === 0
        ? "None"
        : accounts?.map((account, i) => (
            <Stack key={account} w="100%" h="100%">
              <AccountView
                address={account}
                ensName={ENSNames[i]}
                twitter={"qazalin"}
              />
            </Stack>
          ))}
    </Box>
  );
}
