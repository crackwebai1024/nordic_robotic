import React from "react";
import styles from "../home.module.css";
import { MDBBox, MDBTypography, MDBView } from "mdbreact";

const SuperCharger = (props) => {
  return (
    <MDBBox className={styles.supercharge}>
      <MDBTypography tag="p" className={styles.su_theme1 + " sxl"}>
        U
        <MDBTypography tag="p" className={styles.su_theme2 + " sxl"}>
          Supecharger
        </MDBTypography>
      </MDBTypography>
      <MDBTypography tag="p" className={styles.su_theme3 + " userxl"}>
        Superior&nbsp;
        <MDBTypography tag="span" className="userpurple">
          Charge
        </MDBTypography>
      </MDBTypography>
      <MDBTypography tag="p" className={styles.su_theme4 + " userxl"}>
        Through Wireless
      </MDBTypography>
      <MDBTypography tag="p" className={styles.su_theme5 + " bm"}>
        State at your house and you can travel without having with you chargers.
      </MDBTypography>
      <MDBTypography tag="p" className={styles.su_theme6 + " bm"}>
        Learn More Products
      </MDBTypography>
      <MDBView hover zoom className={styles.su_pic}>
        <img
          src="assets/pictures/home/charger.png"
          className="img-fluid"
          alt=""
        />
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
