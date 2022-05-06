import React, { useMemo } from "react";
import { useWindowDimensions } from "@astra/hooks";
import { BREAKPOINTS } from "@astra/theme";

type Props = {
  children?: React.ReactNode;
};

export const AdaptivityContext = React.createContext<boolean>(false);
const AdaptivityProvider: React.FC<Props> = ({ children }) => {
  const isMobile = useWindowDimensions(BREAKPOINTS.md);
  const mobileContext = useMemo(() => isMobile, [isMobile]);
  if (mobileContext !== null) {
    return (
      <AdaptivityContext.Provider value={mobileContext}>
        {children}
      </AdaptivityContext.Provider>
    );
  }
  return null;
};

export default AdaptivityProvider;
