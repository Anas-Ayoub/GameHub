import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

interface Props {
  genre?: String;
  platform? : Platform | null; 
  order? : string | null; 
  searchQuery? : string | null; 
}

const useGames = ({searchQuery, order, genre, platform}:Props) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching Games");
    
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchGameResponse>("/games", { signal: controller.signal, params: {
        genres: genre,
        parent_platforms: platform?.id,
        ordering: order,
        search: searchQuery,
      }})
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => {
      controller.abort();
    };
  }, [genre, platform, order, searchQuery]);

  return { games, error, isLoading };
};

export default useGames;
