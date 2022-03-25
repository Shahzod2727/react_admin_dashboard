// import Topbar from "./components/Topbar/Topbar";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./app.css";
import React from "react";
function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">other pages</div>
      </div>
    </div>
  );
}

export default App;
