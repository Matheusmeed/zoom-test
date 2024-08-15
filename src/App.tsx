import ZoomableDiv from './components/ZoomableDiv';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100dvh',
        width: '100dvw',
      }}
    >
      <ZoomableDiv />
    </div>
  );
}

export default App;
