import logo from "./logo.JPG";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} alt="logo" className="App-logo img-fluid" />
          Dictionary
        </header>
        <main>
          <Dictionary defaultKeyword="World" />
        </main>
        <footer className="App-footer">
          Coded by{" "}
          <a href="https://www.kccd.co.za" target="_blank" rel="noreferrer">
            Kelly Williams
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/KellyW-coder/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            is open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
