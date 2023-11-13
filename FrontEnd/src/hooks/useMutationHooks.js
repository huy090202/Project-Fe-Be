import { useMutation } from "@tanstack/react-query";

export const useMutationHooks = (fnCallback) => {
  // Call api sign-in
  const mutation = useMutation({
    mutationFn: fnCallback,
  });

  return mutation;
};
