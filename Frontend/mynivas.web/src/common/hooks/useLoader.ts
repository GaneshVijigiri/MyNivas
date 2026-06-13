import { useIsFetching, useIsMutating } from "@tanstack/react-query";

export const useLoader = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const isLoading = isFetching > 0 || isMutating > 0;
  return { isLoading, isFetching, isMutating };
};
