import styled from "styled-components";

export const HomeContainer = styled.main`
  height: 100%;
  width: 100%;
  margin-top: -2.4rem;
  border-radius: 10px 10px 0 0;

  background: ${(props) => props.theme.colors[props.theme.default]["100"]}; ;
`;
