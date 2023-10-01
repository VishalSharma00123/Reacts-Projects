import "./App.css";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Hero />
        <div className="space" style={{ height: "20vh" }}></div>
      </div>
    </>
  );
}

export default App;
