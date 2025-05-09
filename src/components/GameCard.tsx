import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/useGames";
import PlatformsIconsList from "./PlatformsIconsList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image == null ? "https://placehold.co/600x400" : getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
      <HStack marginBottom="6px" justifyContent="space-between">
          <PlatformsIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformsIconsList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>

      </CardBody>
    </Card>
  );
};

export default GameCard;
