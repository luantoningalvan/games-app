import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router";
import { Game } from "./types";
import { GameCard } from "./styles";

const CardGame: React.FC<{ game: Game }> = ({ game }) => {
  const { push } = useHistory();

  return (
    <GameCard>
      <CardActionArea onClick={() => push(`/game/${game.slug}`)}>
        <CardMedia
          component="img"
          alt="Nome do jogo"
          height="280"
          image={game.background_image}
          title={game.name}
        />
        <CardContent>
          <Typography variant="h5">{game.name}</Typography>
        </CardContent>
      </CardActionArea>
    </GameCard>
  );
};

export default CardGame;
