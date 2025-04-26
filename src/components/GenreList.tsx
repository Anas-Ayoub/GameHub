import React from "react";
import useGenres from "../hooks/useGenres";
import { HStack, Text, Image, List, ListItem } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY='4px'>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
