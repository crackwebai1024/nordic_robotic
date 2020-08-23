import React from "react";
import styles from "../home.module.css";
import { MDBBox, MDBRow, MDBCol, MDBTypography } from "mdbreact";

const Intro = (props) => {
  return (
    <MDBBox className={styles.intro}>
      <MDBRow className={styles.row}>
        <MDBCol md="6">
          <MDBTypography tag="p" className={styles.intro_theme1 + " usersm"}>
            CURIOS TO KNOW
          </MDBTypography>
          <MDBTypography tag="p" className={styles.intro_theme2 + " bxl"}>
            Who we are?
          </MDBTypography>
          <MDBBox className={styles.intro_theme3 + " usersm"}>
            We are innovative company from Oslo. Our mission is to create a new
            society, where robots are essential part of mankind.
          </MDBBox>
          <MDBTypography tag="p" className={styles.intro_theme4 + " usersm"}>
            Find more about us
            <img src="assets/pictures/home/arrow.png" alt="arrow"></img>
          </MDBTypography>
        </MDBCol>
        <MDBCol md="6" className={styles.intimg}>
          <img
            src="assets/pictures/home/house.png"
            alt="circle"
            className={styles.house}
          />
          <img
            src="assets/pictures/home/overhouse.png"
            alt="circle"
            className={styles.overhouse}
          />
          <MDBBox className={styles.house}>
            <MDBBox className={styles.location_theme + " userxl"}>
              Our Location
            </MDBBox>
            <MDBBox className={styles.location_cont + " sl"}>
              Harju maakond, Tallin, Kesklinna linnaosa, Hobujaama tn 4, 10151,
              registration number is 14701315
            </MDBBox>
            <MDBBox className={styles.location_direct + " usersm"}>
              Get direction
            </MDBBox>
          </MDBBox>
        </MDBCol>
      </MDBRow>
      <img
        src="assets/pictures/home/circles.png"
        alt="circle"
        className={styles.intro_outcircle}
      />
    </MDBBox>
  );
};

export default Intro;
