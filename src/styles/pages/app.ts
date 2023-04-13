import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
`;

export const AppHeader = styled.header`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 0 auto;
  padding: 20px 20px 4rem 20px;

  background-color: ${(props) => props.theme.colors[props.theme.main]["900"]};
  color: white;

  gap: 2rem;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;

    button:nth-child(1) {
      border: none;
      height: 40px;
      width: 40px;
      background: none;

      svg {
        color: white;
      }
    }
  }

  > div:nth-child(1) {
    img {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      border: 1px solid white;
      margin-left: auto;
    }
  }

  > div:nth-child(2) {
    button {
      margin-left: auto;
    }
  }
`;
