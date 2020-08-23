import React from "react";
import styles from "../home.module.css";
import { MDBBox, MDBTypography } from "mdbreact";

function OurClient(props) {
  return (
    <MDBBox>
      <MDBTypography
        tag="p"
        className={styles.comtxt + " usersm " + styles.cli_theme1}
      >
        WORKING WITH US
      </MDBTypography>
      <MDBTypography
        tag="p"
        className={styles.comtxt + " bxl " + styles.cli_theme2}
      >
        Our Clients
      </MDBTypography>
    </MDBBox>
  );
}

export default OurClient;
