import styled from "styled-components";

export const GameCover = styled.div<{ src?: string }>`
  background: url(${(props) => props.src}), #ececec;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 380px;
  border-radius: 8px;
`;

export const PlatformList = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;

  svg {
    height: 22px;
    width: 22px;
    color: #444;
  }
`;
