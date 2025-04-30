import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import { HStack, Text, Image, List, ListItem, Spinner, Button } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectedGenre}:Props) => {
  const { genres, isLoading, error } = useGenres();

  if (error) return <Text>{error}</Text>;
  if (isLoading) return <Spinner />;
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
              <Button fontSize='lg' variant='link' onClick={() => onSelectedGenre(genre)}>{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
