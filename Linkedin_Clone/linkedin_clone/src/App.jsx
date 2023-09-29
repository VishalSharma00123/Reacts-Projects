import { useState } from "react";
import Header from "./Header";
import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <Header />
        {/* App body */}
        <div className="app_body">
          <Sidebar />

          <Feed />
        </div>
      </div>
      <div className="spaces"></div>
    </>
  );
}

export default App;
