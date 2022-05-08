// Modules //
import {
  useWeb3React,
  Web3ReactHooks,
  Web3ReactProvider,
} from "@web3-react/core";

// Classes //
import { MetaMask } from "@web3-react/metamask";
import { Connector } from "@web3-react/types";

// Connectors //
import { hooks as metaMaskHooks, metaMask } from "@astra/lib";

function getName(connector: Connector) {
  if (connector instanceof MetaMask) return "MetaMask";
  return "Unknown";
}

/* const connectors: [
  MetaMask | WalletConnect | CoinbaseWallet | Network,
  Web3ReactHooks
][] = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
  [coinbaseWallet, coinbaseWalletHooks],
  [network, networkHooks],
]; */
const connectors: [MetaMask, Web3ReactHooks][] = [[metaMask, metaMaskHooks]];

function Child() {
  const { connector } = useWeb3React();
  console.log(`Priority Connector is: ${getName(connector)}`);
  return null;
}

export function Web3Provider() {
  return (
    <Web3ReactProvider connectors={connectors}>
      <Child />
    </Web3ReactProvider>
  );
}
