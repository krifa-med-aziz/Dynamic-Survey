import Background from "./components/Background";
import Container from "./components/Container";

function App() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <main className="relative z-10 flex justify-center items-center min-h-screen">
        <Container />
      </main>
    </div>
  );
}

export default App;
