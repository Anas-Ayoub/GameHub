import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/xbox.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (query: string) => void;
} 

const NavBar = ({onSearch}: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} margin="10px" boxSize="60px"></Image>
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
