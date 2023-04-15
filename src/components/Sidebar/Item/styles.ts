import styled from "styled-components";

interface ItemContainerProps {
  isExpandable?: boolean;
}

export const ItemContainer = styled.div<ItemContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px 10px;

  border: 1px solid ${(props) => props.theme.colors[props.theme.main]["900"]};
  border-radius: 6px;
  color: ${(props) => props.theme.colors[props.theme.main]["900"]};
  font-weight: 500;

  gap: 10px;

  > div {
    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
    }
  }
`;
