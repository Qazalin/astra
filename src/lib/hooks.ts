import useSwr from "swr";
import fetcher from "./fetcher";

export const useUser = () => {
  const { data, error } = useSwr("/me", fetcher);

  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  };
};
