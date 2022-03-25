// import Topbar from "./components/Topbar/Topbar";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
// import Home from "./pages/Home/Home";
import Home from "./pages/Home/Home";


import "./app.css";
import React from "react";
function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home/>
      </div>
    </div>
  );
}

export default App;
