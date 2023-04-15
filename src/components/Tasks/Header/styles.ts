import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px 10px 0 20px;
  gap: 10px;
`;

interface ButtonProps {
  selected: boolean;
}

export const Button = styled.button<ButtonProps>`
  border: none;
  background: none;
  height: 2.2rem;
  width: 100%;

  span {
    color: ${(props) => props.theme.colors[props.theme.main]["900"]};
    font-weight: 500;
  }

  ${(props) =>
    props.selected
      ? `border-bottom: 2px solid ${
          props.theme.colors[props.theme.main]["900"]
        };`
      : ""}
`;
