import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";
import PlatformsList from "./PlatformsList";
import { useState } from "react";

interface Props {
  genre: Genre | null;
}

const GameGride = ({genre} : Props) => {
  const [platformId, setPlatformId] = useState<number | null>(null);

  const { games, error, isLoading } = useGames({ genre: genre?.slug, platformId: platformId});
  const skeletons = [1, 2, 3, 4, 5, 6];

  const onSelectedPlatformId = (platform: number) => {
    console.log(platform);
    
    setPlatformId(platform); 
  }
  return (
    <><PlatformsList onSelectPlatformId={onSelectedPlatformId}/>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardSkeleton key={skeleton}></GameCardSkeleton>
          ))}
        {games.map(game => 
          <GameCard key={game.id} game={game} />
        )}
      </SimpleGrid>
    </>
  );
};

export default GameGride;
