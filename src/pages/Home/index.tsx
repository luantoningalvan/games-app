import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

const Home: React.FC = () => {
  const { push } = useHistory();
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("https://api.rawg.io/api/games");
      setGames(result.data);
    }

    fetchData();
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {games.map(() => (
          <Grid item xs={3}>
            <Card onClick={() => push(`/game/123`)}>
              <CardMedia
                component="img"
                alt="Nome do jogo"
                height="350"
                image="https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Battlefield_V_standard_edition_box_art.jpg/220px-Battlefield_V_standard_edition_box_art.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography variant="h5">Título do jogo</Typography>
                <Typography variant="body2" color="textSecondary">
                  Empresa tal
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
