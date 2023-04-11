import styled from "styled-components";

export const AddContainer = styled.button`
  min-width: 40px;
  min-height: 40px;

  position: absolute;
  bottom: 20px;
  right: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;

  background: #454bb6;

  z-index: 1;

  -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 4px -0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);

  svg {
    color: white;
    font-size: 1.6rem;
  }
`;
