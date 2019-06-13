import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Useritem from "./components/user/Useritem";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Useritem/>
      </div>
    );
  }
}
export default App;
