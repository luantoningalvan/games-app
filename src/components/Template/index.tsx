import {
  AppBar,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
  createMuiTheme,
  colors,
  Container,
} from "@material-ui/core";

const Template: React.FC = ({ children }) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: colors.orange[700],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" elevation={0}>
        <Toolbar disableGutters>
          <Container>
            <Typography variant="h6">Jogos</Typography>
          </Container>
        </Toolbar>
      </AppBar>

      <main style={{ marginTop: 32 }}>{children}</main>
    </ThemeProvider>
  );
};

export default Template;
