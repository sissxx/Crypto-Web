import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import {Trade} from "./Routes/Trade";
import {CoinPage} from "./Routes/CoinPage";
import { HomePage } from "./Components/HomePage";

function App() {
  return (
      <Router>
        <Route path="/" exact render={(props) => <HomePage />} />
        <Route path="/trade" exact render={(props) => <Trade />} />
        <Route path="/CoinPage/:id" exact render={(props) => <CoinPage />} />
      </Router>
  );
}

export default App;
