import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();

        setIsPending(false);
        setData(json);
      } catch (err) {
        setIsPending(false);
        setError("could not fetch data");
        console.log(err.message);
      }
    };
    fetchData();
  }, [url]);
  console.log(isPending, "hi");
  return { data, isPending, error };
  // dont forget to destructure the return values in triplist
};
