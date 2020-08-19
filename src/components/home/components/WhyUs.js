import React from "react";
import styles from "../home.module.css";
import { MDBBox, MDBRow, MDBCol, MDBTypography } from "mdbreact";

const WhyUs = (props) => {
  return (
    <MDBBox className={styles.wrapper}>
      <MDBRow>
        <MDBCol md="6">
          <img
            src="assets/pictures/home/girl.png"
            alt="girl"
            className={styles.girlpic}
          />
          <img
            src="assets/pictures/home/overgirl.png"
            alt="girl"
            className={styles.overgirlpic}
          />
        </MDBCol>
        <MDBCol md="6">
          <MDBTypography
            tag="p"
            className={styles.comtxt + " " + styles.wh_theme1}
          >
            WE HAVE ROLE
          </MDBTypography>
          <MDBTypography
            tag="p"
            className={styles.comtxt + " " + styles.wh_theme2}
          >
            Why Us ?
          </MDBTypography>
          <MDBTypography
            tag="p"
            className={styles.comtxt + " " + styles.wh_theme3}
          >
            In Nordic Robotics we have only proven eco-friendly technologies
            that maintain nature purity. Our equipment is fully autonomous and
            operates on electricity for more than 20 hours without recharging.
            <br></br>
            <br></br>
            We are proud that we create robots that not only help to deal with
            the consequences of nature’s whims, but also take care not to create
            new ones by their work.
          </MDBTypography>
          <MDBTypography
            tag="p"
            className={styles.intro_theme4 + " " + styles.wh_theme4}
          >
            Find more reason
            <img src="assets/pictures/home/arrow.png" alt="arrow"></img>
          </MDBTypography>
        </MDBCol>
      </MDBRow>
    </MDBBox>
  );
};

export default WhyUs;
