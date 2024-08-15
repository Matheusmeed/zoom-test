import ZoomableComponent from './components/ZoomableComponent';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100dvh',
        width: '100dvw',
        overflow: 'hidden',
      }}
    >
      <ZoomableComponent />
    </div>
  );
}

export default App;
