import { Select, Text } from "@chakra-ui/react";
import React from "react";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectPlatformId: (platformId: number) => void;
}

const PlatformsList = ({onSelectPlatformId}:Props) => {
  const { platforms, error, isLoading } = usePlatforms();

    if(error) return null;
  return (
    <Select onChange={ (e) => onSelectPlatformId(parseInt(e.target.value))} padding="10px" width="200px" placeholder="Platforms">
      {platforms.map((p) => (
        <option key={p.id} value={p.id}>
          {p.name}
        </option>
      ))}
    </Select>
  );
};

export default PlatformsList;
