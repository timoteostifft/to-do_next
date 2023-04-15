import styled from "styled-components";

export const ThemeSelectionContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  gap: 4px;
  z-index: 2;

  button {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 6px;
  }

  button:nth-child(1) {
    background-color: ${(props) => props.theme.colors.purple["900"]};
  }

  button:nth-child(2) {
    background-color: ${(props) => props.theme.colors.green["900"]};
  }

  button:nth-child(3) {
    background-color: ${(props) => props.theme.colors.red["900"]};
  }
`;
