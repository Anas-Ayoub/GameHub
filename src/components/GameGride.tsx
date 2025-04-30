import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";

interface Props {
  genre: Genre | null;
}

const GameGride = ({genre} : Props) => {
  const { games, error, isLoading } = useGames({ genre: genre?.slug });
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>{genre && <Text>{genre.name}</Text>}
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
