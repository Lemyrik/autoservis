import { useState } from "react";

export const UseFetching = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchData(cb) {
    try {
      setLoading(true);
      await cb();
    } catch (error) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  }
  return { fetchData, loading, error };
};
