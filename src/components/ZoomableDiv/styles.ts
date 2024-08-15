import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 50%;
  height: 50%;
  overflow: hidden;
  border: 1px solid #ccc;
`;

export const PropertyImage = styled.img`
  width: 100%;
  height: 100%;
  user-select: none;
  pointer-events: none; /* Para evitar interferência ao arrastar */
`;
