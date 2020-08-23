import React from "react";
import { MDBBox } from "mdbreact";
import Partner from "./components/Partner";
import Story from "./components/Story";
import Connect from "./components/Connect";
import AppConnect from "./components/AppConnect";

const Cooperate = (props) => {
  return (
    <MDBBox className="cont_container">
      <Partner />
      <Story />
      <Connect />
      <AppConnect />
    </MDBBox>
  );
};

export default Cooperate;
