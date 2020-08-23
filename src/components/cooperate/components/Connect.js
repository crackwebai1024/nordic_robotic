import React from "react";
import styles from "../cooperate.module.css";
import { MDBBox, MDBTypography } from "mdbreact";
import ContactCard from "./ContactCard";

const Connect = (props) => {
  return (
    <MDBBox className={styles.conbox}>
      <MDBTypography tag="p" className={styles.con_theme1 + " bxl"}>
        Let us hear from you
      </MDBTypography>
      <MDBBox className={styles.robotbox}>
        <img src="assets/pictures/cooperate/robots.png" alt="robot" />
      </MDBBox>
      <ContactCard />
    </MDBBox>
  );
};

export default Connect;
