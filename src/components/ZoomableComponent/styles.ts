import styled from 'styled-components';

export const Container = styled.div`
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
    cursor: pointer;
    background-color: white;
    border-radius: 6px;
    padding: 6px 10px;
    border: 2px solid black;
    user-select: none;
  }
`;

export const MinimapContainer = styled.div`
  user-select: none;
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid black;
  border-radius: 8px;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
  }

  .rzpp-preview {
    border: 2px solid red !important;
  }
`;
