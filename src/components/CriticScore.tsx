import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 50 ? "yellow" : "red";

  return (
    <Badge fontSize="15px" paddingX={2} colorScheme={color} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
