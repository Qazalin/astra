import { useContext } from "react";
import { AdaptivityContext } from "@astra/providers";

export const useAdaptivityContext = () => useContext(AdaptivityContext);
