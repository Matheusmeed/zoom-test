import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { Container, ZoomButtonsDiv } from './styles';

const ZoomableComponent = () => {
  return (
    <TransformWrapper
      initialScale={1}
      alignmentAnimation={{ sizeX: 0, sizeY: 0 }}
    >
      {({ zoomIn, zoomOut, resetTransform }) => (
        <>
          <ZoomButtonsDiv>
            <button
              onClick={() => {
                zoomIn();
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                zoomOut();
              }}
            >
              -
            </button>
            <button
              onClick={() => {
                resetTransform();
              }}
            >
              Reset
            </button>
          </ZoomButtonsDiv>
          <TransformComponent>
            <Container>
              <img src='/assets/images/property.jpg' alt='property' />
            </Container>
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
};

export default ZoomableComponent;
