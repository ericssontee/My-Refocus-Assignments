import "./App.css";

function App() {
  return (
    <div className="topnav">
      <div className="username">
        <h4>Ericsson</h4>
      </div>
      <div className="menu">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#about">About</a>
      </div>
    </div>
  );
}

export default App;
