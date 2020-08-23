import React from "react";
import styles from "./footer.module.css";
import { MDBBox, MDBTypography, MDBIcon } from "mdbreact";
import Contact from "./components/Contact";
import Items from "./components/Items";

const Footer = (props) => {
  const { isLeft } = props;

  let circleclass = "";
  if (isLeft) {
    circleclass = "circle1";
  } else {
    circleclass = "circle2";
  }

  return (
    <MDBBox className={styles.wrapper}>
      <MDBBox className={styles.container}>
        <MDBBox
          className={styles.deccircle + " " + styles[circleclass]}
        ></MDBBox>
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
