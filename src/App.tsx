import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, md: `"nav nav" "aside main"` }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="md">
        <GridItem area="aside" bg="cyan">
          main
        </GridItem>
      </Show>
      <GridItem area="main" bg="grey">
        nav
      </GridItem>
    </Grid>
  );
}

export default App;
