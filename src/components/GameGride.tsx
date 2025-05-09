import { HStack, SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";
import PlatformsList from "./PlatformsList";
import { useState } from "react";
import OrderSelector from "./OrderSelector";

interface Props {
  genre: Genre | null;
  searchQuery: string;
}

const GameGride = ({searchQuery, genre }: Props) => {
  const [platform, setPlatform] = useState<Platform | null>(null);
  const [order, setOrder] = useState<string | null>(null);
  

  const { games, error, isLoading } = useGames({
    genre: genre?.slug,
    platform: platform,
    order: order,
    searchQuery: searchQuery,
  });
  const skeletons = [1, 2, 3, 4, 5, 6];

  const onSelectedPlatform = (platform: Platform | null) => {
    console.log("id: "+platform?.id);
    console.log("platform: "+platform?.name);
    console.log("slig: "+platform?.slug);
    

    setPlatform(platform);
  };

  const onSelectOrder = (order: string) => {
    console.log(order);

    setOrder(order);
  };


  return (
    <>
      <Text fontSize="6xl" fontWeight="bold" padding="10px">
       {genre?.name} {platform?.name} Games</Text>
      <HStack padding="10px">
        <PlatformsList onSelectPlatform={onSelectedPlatform} />
        <OrderSelector onSelectOrder={onSelectOrder}/>
      </HStack>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardSkeleton key={skeleton}></GameCardSkeleton>
          ))}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGride;
