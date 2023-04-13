import styled from "styled-components";

export const ItemContainer = styled.div`
  height: 40px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors[props.theme.main]["900"]};
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  color: ${(props) => props.theme.colors[props.theme.main]["900"]};
  font-weight: 500;
  cursor: pointer;

  svg {
    margin-right: 10px;
  }
`;
