import React from "react";
import { MDBBox } from "mdbreact";
import styles from "../about.module.css";
import Menu from "./Menu";
import Mission from "./Mission";
import Values from "./Values";
import Robot from "./Robot";
import Location from "./Location";

const Content = (props) => {
  return (
    <MDBBox className={styles.cont_wrapper}>
      <Menu />
      <Mission />
      <Values />
      <Robot />
      <Location />
    </MDBBox>
  );
};

export default Content;
