import { Card } from "@material-ui/core";
import styled from "styled-components";

export const GameCard = styled(Card)`
  box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 7%);
  background: transparent;
  border-radius: 8px;

  h5 {
    font-size: 1.4rem;
    line-height: 1.5rem;
    font-weight: bold;
    height: 3rem;
  }
`;
