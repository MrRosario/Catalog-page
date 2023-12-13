import { IProduct } from "@/types/global";
import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState<IProduct[]>([]);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, error, loading };
};
