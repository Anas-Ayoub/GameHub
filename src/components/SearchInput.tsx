import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (query: string) => void; 
}

const SearchInput = ({onSearch}: Props) => {
  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(event.currentTarget.value);
    }
  };

  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch></BsSearch>}></InputLeftElement>
      <Input 
        borderRadius="20px" 
        placeholder="Search Games" 
        variant='filled'
        onKeyDown={handleSearch}
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;
