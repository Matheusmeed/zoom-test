import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: red;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ZoomButtonsDiv = styled.div`
  position: absolute;
  z-index: 1;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  button {
    background-color: white;
    border-radius: 6px;
    padding: 6px 10px;
    border: 2px solid black;
  }
`;
