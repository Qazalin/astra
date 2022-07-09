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

export const useProjects = () => {
  const { data, error } = useSwr("/projects", fetcher);

  return {
    projects: data || [],
    isLoading: !data && !error,
    isError: error,
  };
};
