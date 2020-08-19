import React from "react";
import "./utility/App.css";
import history from "./utility/history";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import BaseRouter from "./routes";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <BaseRouter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
