import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 80vw;
  max-width: 400px;
  height: 100vh;
  padding: 20px 10px;

  background: ${(props) => props.theme.colors[props.theme.main]["100"]};

  -webkit-box-shadow: 22px 0px 50px 50px rgba(0, 0, 0, 0.3);
  box-shadow: 22px 0px 50px 50px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;

  gap: 10px;

  header {
    display: flex;
    width: 100%;
    justify-content: flex-end;

    > button {
      height: 40px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: 0;

      svg {
        color: ${(props) => props.theme.colors[props.theme.main]["900"]};
      }
    }
  }
`;
