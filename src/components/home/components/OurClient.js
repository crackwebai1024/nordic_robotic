import React from "react";
import styles from "../home.module.css";
import { MDBBox, MDBTypography } from "mdbreact";

function OurClient(props) {
  return (
    <MDBBox>
      <MDBBox>
        <MDBTypography
          tag="p"
          className={styles.comtxt + " " + styles.cli_theme1}
        >
          WORKING WITH US
        </MDBTypography>
        <MDBTypography
          tag="p"
          className={styles.comtxt + " " + styles.cli_theme2}
        >
          Our Clients
        </MDBTypography>
      </MDBBox>
      <MDBBox className={styles.cli_scroll}></MDBBox>
    </MDBBox>
  );
}

export default OurClient;
