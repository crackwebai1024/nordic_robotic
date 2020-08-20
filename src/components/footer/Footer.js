import React from "react";
import styles from "./footer.module.css";
import { MDBBox, MDBTypography, MDBIcon } from "mdbreact";
import Contact from "./Contact";
import Items from "./Items";

const Footer = () => {
  return (
    <MDBBox className={styles.wrapper}>
      <MDBBox className={styles.container}>
        <MDBBox className={styles.circle1}></MDBBox>
        <Contact />
        <hr className={styles.sector}></hr>
        <Items />
        <MDBBox className={styles.copydiv}>
          <MDBTypography tag="p" className={styles.copyright}>
            <MDBIcon far icon="copyright" />
            &nbsp;2020 Nordic Robotic. All Rights Reserved.
          </MDBTypography>
        </MDBBox>
      </MDBBox>
    </MDBBox>
  );
};

export default Footer;
