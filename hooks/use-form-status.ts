import { useState } from "react";

export const useFormStatus = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  return {
    error,
    setError,
    success,
    setSuccess,
  };
};