import React from "react";
import styles from "../cooperate.module.css";
import { MDBBox, MDBTypography, MDBRow, MDBCol } from "mdbreact";
import ContactCard from "./ContactCard";

const AppConnect = (props) => {
  return (
    <MDBBox className={styles.appconbox}>
      <MDBTypography tag="p" className={styles.appcon_theme1 + " bxl"}>
        Let us hear from you
      </MDBTypography>
      <MDBRow>
        <MDBCol md="6">
          <MDBBox className={styles.approbotbox}>
            <img src="assets/pictures/cooperate/robots.png" alt="robot" />
          </MDBBox>
        </MDBCol>
        <MDBCol md="6">
          <ContactCard />
        </MDBCol>
      </MDBRow>
    </MDBBox>
  );
};

export default AppConnect;
