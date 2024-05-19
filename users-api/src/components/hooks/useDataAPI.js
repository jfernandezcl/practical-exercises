import { useEffect } from "react";
import { useState } from "react";

export function useDataAPI(url) {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return { data };
}
