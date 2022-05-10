import { formatEther } from "@ethersproject/units";
import type { Web3ReactHooks } from "@web3-react/core";
import { useBalances } from "@astra/hooks";
import {
  Center,
  ScaleFade,
  Button,
  Box,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
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
  const { isOpen, onToggle } = useDisclosure();

  if (accounts === undefined) return null;

  return (
    <>
      <Stack w="100%" h="100%">
        <Button variant="primaryGhost" onClick={onToggle}>
          View accounts
        </Button>
      </Stack>
      <ScaleFade initialScale={0.9} in={isOpen}>
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
      </ScaleFade>
    </>
  );
}
