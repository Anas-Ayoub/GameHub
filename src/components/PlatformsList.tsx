import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform | null) => void;
}

const PlatformsList = ({onSelectPlatform}:Props) => {
  const { platforms, error, isLoading } = usePlatforms();

  if(error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => onSelectPlatform(null)} >All</MenuItem>
        {platforms.map((platform) => (
          <MenuItem 
            onClick={() => onSelectPlatform(platform)} 
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformsList;
