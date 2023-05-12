import React from "react"
import { Route } from "react-router-dom"

// Components
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Form from "./components/Form"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/form" component={() => <Form />} />
    </div>
  );
}

export default App;
