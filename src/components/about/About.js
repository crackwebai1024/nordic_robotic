import React from "react";
import styles from "./about.module.css";
import { MDBBox } from "mdbreact";
import Building from "./components/Building";
import Content from "./components/Content";

const About = (props) => {
  return (
    <MDBBox className="cont_container">
      <MDBBox className={styles.wrapper}>
        <Building />
        <Content />
      </MDBBox>
    </MDBBox>
  );
};

export default About;
