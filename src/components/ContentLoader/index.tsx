import { CircularProgress } from "@material-ui/core";
import { Container } from "./styles";

const ContentLoader = (props: {
  loading: boolean;
  children: JSX.Element;
}): JSX.Element => {
  const { loading, children } = props;

  if (loading) {
    return (
      <Container>
        <CircularProgress color="primary" />
      </Container>
    );
  }

  return children;
};

export default ContentLoader;
