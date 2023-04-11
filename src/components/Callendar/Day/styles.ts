import styled from "styled-components";

export const DayContainer = styled.button`
  display: flex;
  flex-direction: column;
  border: none;
  background-color: #797dcd;
  border-radius: 6px;

  width: 40px;
  height: 40px;

  strong {
    margin-top: 2px;
    color: white;
    font-size: 0.9rem;
    font-weight: 700;
  }

  span {
    margin-top: -4px;
    font-weight: 500;
    color: #c4c6e9;
    font-size: 0.65rem;
  }
`;
