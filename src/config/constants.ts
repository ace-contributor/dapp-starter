import { ReactComponent as CoinbaseSVG } from "assets/svgs/wallet/coinbase.svg";
import { ReactComponent as FormaticSVG } from "assets/svgs/wallet/fortmatic.svg";
import { ReactComponent as MetaMaskSVG } from "assets/svgs/wallet/metamask-color.svg";
import { ReactComponent as PortisSVG } from "assets/svgs/wallet/portis.svg";
import { ReactComponent as WalletConnectSVG } from "assets/svgs/wallet/wallet-connect.svg";
import { ConnectorNames } from "utils/enums";

export const STORAGE_KEY_CONNECTOR = "CONNECTOR";
export const LOGGER_ID = "dapp-starter";

export const INFURA_PROJECT_ID = process.env.REACT_APP_INFURA_PROJECT_ID;

export const TOKEN_PRICE_DECIMALS = 18;
export const WEIGHT_DECIMALS = 18;

export const WALLET_ICONS: { [key in ConnectorNames]: React.ElementType } = {
  [ConnectorNames.Injected]: MetaMaskSVG,
  [ConnectorNames.WalletConnect]: WalletConnectSVG,
  [ConnectorNames.WalletLink]: CoinbaseSVG,
  [ConnectorNames.Fortmatic]: FormaticSVG,
  [ConnectorNames.Portis]: PortisSVG,
};
