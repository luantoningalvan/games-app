import {
  AppBar,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  createMuiTheme,
  colors,
  Container,
  IconButton,
  Typography,
  Link as MUILink,
} from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Logo, Footer } from "./styles";
import { ReactComponent as LogoSvg } from "../../assets/logo.svg";
import { FiChevronLeft } from "react-icons/fi";
import { useEffect } from "react";

const Template: React.FC = ({ children }) => {
  const { goBack } = useHistory();
  const { pathname } = useLocation();

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: colors.deepPurple[500],
      },
    },
    typography: {
      fontFamily: "Ubuntu",
    },
  });

  useEffect(() => {
    console.log(pathname !== "/");
  }, [pathname]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <header>
        <AppBar position="static" elevation={0} color="transparent">
          <Container>
            <Toolbar disableGutters style={{ height: 96 }}>
              {pathname !== "/" && (
                <IconButton
                  color="primary"
                  edge="start"
                  style={{ marginRight: 16 }}
                  onClick={goBack}
                >
                  <FiChevronLeft />
                </IconButton>
              )}
              <Link to="/">
                <Logo>
                  <LogoSvg height={32} />
                </Logo>
              </Link>
            </Toolbar>
          </Container>
        </AppBar>
      </header>

      <main style={{ marginTop: 16 }}>{children}</main>

      <Footer>
        <Typography variant="body1" color="textSecondary">
          Desenvolvido utilizando a API do site{" "}
          <MUILink
            component="a"
            href="https://rawg.io/"
            target="_blank"
            rel="noreferrer"
            color="primary"
          >
            RAWG
          </MUILink>
        </Typography>
      </Footer>
    </ThemeProvider>
  );
};

export default Template;
