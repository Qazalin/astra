import { formatEther } from "@ethersproject/units";
import type { Web3ReactHooks } from "@web3-react/core";
import { useBalances } from "@astra/hooks";
import { Box, ListItem, Text, List } from "@chakra-ui/react";

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
    <Box>
      <Text>Accounts: </Text>
      <Box>
        {accounts.length === 0
          ? "None"
          : accounts?.map((account, i) => (
              <List
                key={account}
                style={{
                  margin: 0,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                <ListItem>{ENSNames?.[i] ?? account}</ListItem>
                <ListItem>
                  {balances?.[i] ? ` (Ξ${formatEther(balances[i])})` : null}
                </ListItem>
              </List>
            ))}
      </Box>
    </Box>
  );
}
