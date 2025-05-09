import { Select, Text } from "@chakra-ui/react";
import React from "react";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platformId: string) => void;
}

const PlatformsList = ({onSelectPlatform}:Props) => {
  const { platforms, error, isLoading } = usePlatforms();

    if(error) return null;
  return (
    <Select onChange={ (e) => onSelectPlatform(e.target.value)} width="200px" placeholder="Platforms">
      {platforms.map((p) => (
        <option key={p.id} value={p.id}>
          {p.name}
        </option>
      ))}
    </Select>
  );
};

export default PlatformsList;
