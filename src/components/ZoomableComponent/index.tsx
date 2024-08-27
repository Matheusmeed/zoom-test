import {
  TransformWrapper,
  TransformComponent,
  MiniMap,
} from 'react-zoom-pan-pinch';
import { Container, ZoomButtonsDiv, MinimapContainer } from './styles';

const ZoomableComponent = () => {
  return (
    <TransformWrapper
      initialScale={1}
      alignmentAnimation={{ sizeX: 0, sizeY: 0 }}
      smooth
      centerZoomedOut
    >
      {({ zoomIn, zoomOut, resetTransform }) => (
        <>
          <ZoomButtonsDiv>
            <button onClick={() => zoomIn()}>+</button>
            <button onClick={() => zoomOut()}>-</button>
            <button onClick={() => resetTransform()}>Reset</button>
          </ZoomButtonsDiv>

          <TransformComponent
            wrapperStyle={{ height: '100%', width: '100%' }}
            contentStyle={{ height: '100%', width: '100%' }}
          >
            <Container>
              <img src='/assets/images/property2.webp' alt='property' />
            </Container>
          </TransformComponent>

          <MinimapContainer>
            <MiniMap borderColor='red' style={{ border: '1px solid white' }}>
              <img src='/assets/images/property2.webp' alt='property mini' />
            </MiniMap>
          </MinimapContainer>
        </>
      )}
    </TransformWrapper>
  );
};

export default ZoomableComponent;
