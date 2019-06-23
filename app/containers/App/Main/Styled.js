import styled from 'styled-components';

export const makeCollageSectionClass = (Component) => styled(Component)`
  position: relative;
  backface-visibility: hidden;
  perspective: 500px;
  display: inline-block;
  margin: 2vw 0;

  h1 {
    font-size: 30vw;
    margin: 0;
    line-height: 1;
    display: inline-block;
    transition: all 1s ease-in-out;
  }
`;


export const makeCollagePositionClass = (Component) => styled(Component)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;
