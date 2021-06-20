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
        <footer className="App-footer">Coded by Kelly Williams</footer>
      </div>
    </div>
  );
}

export default App;
