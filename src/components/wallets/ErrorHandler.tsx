import { Alert, Box } from "@chakra-ui/react";

/**
 * ErrorHandler for MetaMask and Brave wallet
 * uses exhaustive type checking
 * @param error The error Object
 */
export const ErrorHandler: React.FC<{ error: Error }> = ({ error }) => {
  const ErrorMessage: Record<string, string> = {
    allreadyProcessing: "Please check your wallet and approve connection",
  };
  let errorMsg: string;
  switch (error.message) {
    case "Already processing eth_requestAccounts. Please wait.":
      errorMsg = ErrorMessage.allreadyProcessing;
  }

  return <Box bg="red.400">{errorMsg}</Box>;
};
