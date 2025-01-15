import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, md: `"nav nav" "aside main"` }}
    >
      <GridItem area="nav" bg="coral">
        nav
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
