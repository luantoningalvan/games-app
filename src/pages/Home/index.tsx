import { Container, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { Game } from "../../components/CardGame/types";
import CardGame from "../../components/CardGame";
import ContentLoader from "../../components/ContentLoader";

const Home: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      document.title = "GamesApp - Informações sobre os games";
      setLoading(true);
      const result = await api.get(`/games`);
      setGames(result.data.results);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        <ContentLoader loading={loading}>
          <>
            {games.map((game) => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardGame game={game} />
              </Grid>
            ))}
          </>
        </ContentLoader>
      </Grid>
    </Container>
  );
};

export default Home;
