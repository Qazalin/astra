import { Alert, Box, useToast } from "@chakra-ui/react";

/**
 * ErrorHandler for MetaMask and Brave wallet
 * uses exhaustive type checking
 * @param error The error Object
 */
export const ErrorHandler: React.FC<{ error: Error }> = ({ error }) => {
  const toast = useToast();
  const ErrorMessage: Record<string, string> = {
    allreadyProcessing: "Please check your wallet and approve connection",
    userRejected: "You have hit cancel, please try connecting again",
  };
  let errorMsg: string;
  switch (error.message) {
    case "Already processing eth_requestAccounts. Please wait.":
      errorMsg = ErrorMessage.allreadyProcessing;
    case "User rejected the request.":
      errorMsg = ErrorMessage.userRejected;
  }

  return <Box bg="red.400">{errorMsg}</Box>;
};
