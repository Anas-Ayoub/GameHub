import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Platforms {
  id: number;
  name: string;
  slug: string;
}

interface FetchGameResponse {
  count: number;
  results: Platforms[];
}

const usePlatforms = () => {
  const [platforms, setPlatforms] = useState<Platforms[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const Controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchGameResponse>("/platforms/lists/parents", {
        signal: Controller.signal,
      })
      .then((platforms) => {
        setPlatforms(platforms.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => {
      Controller.abort();
    };
  }, []);

  return { platforms, error, isLoading};
};

export default usePlatforms;
