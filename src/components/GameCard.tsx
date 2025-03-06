import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/useGames";
import PlatformsIconsList from "./PlatformsIconsList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>

        <PlatformsIconsList
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatformsIconsList>
      </CardBody>
    </Card>
  );
};

export default GameCard;
