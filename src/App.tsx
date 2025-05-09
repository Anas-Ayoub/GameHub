import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGride from "./components/GameGride";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";

function App() {

  const [seletedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const onSelectedGenre = (genre: Genre) => {
    setSelectedGenre(genre);
  }
  const onSearchQuery = (query: string) => {
    console.log(query);

    setSearchQuery(query);
  };

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, md: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", md: "300px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar onSearch={onSearchQuery}/>
      </GridItem>
      <Show above="md">
        <GridItem area="aside" paddingX={4}><GenreList selectedGenre={seletedGenre} onSelectedGenre={onSelectedGenre}></GenreList></GridItem>
      </Show>
      <GridItem area="main">
        <GameGride searchQuery={searchQuery} genre={seletedGenre}/>
      </GridItem>
    </Grid>
  );
}

export default App;
