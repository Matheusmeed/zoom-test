import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { Container, PropertyImage } from './styles';

const ZoomableDiv = () => {
  return (
    <Container>
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={3}
        wheel={{ step: 0.1 }}
        doubleClick={{ disabled: true }} // Desativa o zoom duplo clique, se quiser
      >
        <TransformComponent>
          <PropertyImage src='/images/property.jpg' alt='property' />
        </TransformComponent>
      </TransformWrapper>
    </Container>
  );
};

export default ZoomableDiv;
