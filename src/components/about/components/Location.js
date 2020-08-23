import React from "react";
import styles from "../about.module.css";
import { MDBBox, MDBTypography } from "mdbreact";

function Location(props) {
  return (
    <MDBBox className={styles.location}>
      <MDBTypography tag="p" className={styles.loc_theme + " bxl"}>
        Our Location &amp; Team
      </MDBTypography>
      <MDBTypography tag="p" className={styles.loc_cont + " bl"}>
        Let me present to you the company Nordic Robotics. We are innovative
        company from Oslo. We produce robots and solutions which never existed.
      </MDBTypography>
      <MDBBox className={styles.locationbox}>
        <img src="assets/pictures/about/location.png" alt="location" />
      </MDBBox>
    </MDBBox>
  );
}

export default Location;
