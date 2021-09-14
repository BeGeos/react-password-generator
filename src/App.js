import BoxContainer from "./components/BoxContainer";

function App() {
  return (
    <div className="container">
      <BoxContainer />

      <div className="author__info">
        <p>
          Brought to you by{" "}
          <a
            href="https://github.com/BeGeos "
            target="_blank"
            rel="noopener noreferrer"
          >
            BeGeos
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
