import { Chip, Container, Grid, Tooltip, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { Game } from "../../components/CardGame/types";
import { useParams } from "react-router";
import { GameCover, PlatformList } from "./styles";
import ContentLoader from "../../components/ContentLoader";
import {
  FaXbox,
  FaPlaystation,
  FaAndroid,
  FaAppStoreIos,
  FaLaptop,
  FaApple,
  FaLinux,
} from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import DOMPurify from "dompurify";

const SingleGame: React.FC = () => {
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { id }: { id: string } = useParams();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      document.title = "Carregando - GamesApp";

      const result = await api.get(`/games/${id}`);
      setGame(result.data);
      document.title = `${result.data.name} - GamesApp`;
      setLoading(false);
    }

    fetchData();
  }, [id]);

  const platformIcons: any = {
    android: <FaAndroid />,
    ios: <FaAppStoreIos />,
    playstation: <FaPlaystation />,
    xbox: <FaXbox />,
    pc: <FaLaptop />,
    macos: <FaApple />,
    linux: <FaLinux />,
    nintendo: <SiNintendoswitch />,
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <ContentLoader loading={loading}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4} lg={3}>
              <GameCover src={game?.background_image} />
              <PlatformList>
                {game?.parent_platforms.map((platform) => (
                  <Tooltip title={platform.platform.name}>
                    <div>{platformIcons[platform.platform.slug]}</div>
                  </Tooltip>
                ))}
              </PlatformList>
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
              <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                {game?.genres.map((genre) => (
                  <Chip label={genre.name} variant="outlined" color="primary" />
                ))}
              </div>
              <Typography variant="h3">{game?.name}</Typography>
              <Typography
                variant="h6"
                color="textSecondary"
                style={{ marginTop: 8 }}
              >
                {game?.developers.map((dev) => dev.name).join(", ")}
              </Typography>

              <Typography
                component="div"
                variant="body2"
                color="textSecondary"
                style={{ marginTop: 24 }}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(game?.description || ""),
                }}
              />
            </Grid>
          </Grid>
        </ContentLoader>
      </Grid>
    </Container>
  );
};

export default SingleGame;
