import "./App.css";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import Companies from "./component/companies/companies";
import Residencies from "./component/Residencies/Residencies";

function App() {
  return (
    <>
      <div className="App">
        <div>
          <div className="white-gradient" />
          <Header />
          <Hero />
        </div>
        <Companies />
        <Residencies />
        <div
          className="space"
          style={{ height: "20vh", background: "white" }}
        ></div>
      </div>
    </>
  );
}

export default App;
