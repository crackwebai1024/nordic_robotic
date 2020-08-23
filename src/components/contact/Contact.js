import React from "react";
import styles from "./contact.module.css";
import { MDBBox, MDBTypography, MDBRow, MDBCol } from "mdbreact";
import Contactcont from "./components/Contactcont";

const Contact = (props) => {
  return (
    <MDBBox className="cont_container">
      <MDBBox className={styles.themebox}>
        <img src="assets/pictures/contact/Layer.png" alt="layer" />
        <MDBTypography tag="p" className={styles.theme + " bxl"}>
          Contact Us
        </MDBTypography>
        <MDBTypography tag="p" className={styles.themecont + " bl"}>
          Ask us everything and we will serve and guide you to better innovation
        </MDBTypography>
      </MDBBox>
      <Contactcont />
    </MDBBox>
  );
};

export default Contact;
