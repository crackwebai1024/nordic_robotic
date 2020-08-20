import React from "react";
import styles from "../home.module.css";
import { MDBBox, MDBTypography, MDBView } from "mdbreact";

const SuperCharger = (props) => {
  return (
    <MDBBox className={styles.supercharge}>
      <MDBTypography tag="p" className={styles.su_theme1}>
        U
        <MDBTypography tag="p" className={styles.su_theme2}>
          Supecharger
        </MDBTypography>
      </MDBTypography>
      <MDBTypography tag="p" className={styles.su_theme3}>
        Superior&nbsp;
        <MDBTypography tag="span" className="userpurple">
          Charge
        </MDBTypography>
      </MDBTypography>
      <MDBTypography tag="p" className={styles.su_theme4}>
        Through Wireless
      </MDBTypography>
      <MDBTypography tag="p" className={styles.su_theme5}>
        State at your house and you can travel without having with you chargers.
      </MDBTypography>
      <MDBTypography tag="p" className={styles.su_theme6}>
        Learn More Products
      </MDBTypography>
      <MDBView hover zoom className={styles.su_pic}>
        <img
          src="assets/pictures/home/charger.png"
          className="img-fluid"
          alt=""
        />
        {/* <MDBMask className="flex-center">
          <p className="white-text">Super light overlay</p>
        </MDBMask> */}
      </MDBView>
      <MDBBox className={styles.circlebox}>
        <MDBBox className={styles.su_circle}></MDBBox>
        <MDBBox className={styles.su_circle}></MDBBox>
        <MDBBox className={styles.su_circle}></MDBBox>
        <MDBBox className={styles.su_circle}></MDBBox>
      </MDBBox>
    </MDBBox>
  );
};

export default SuperCharger;
