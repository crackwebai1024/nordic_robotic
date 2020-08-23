import React from "react";
import styles from "../about.module.css";
import { MDBBox, MDBRow, MDBCol, MDBTypography } from "mdbreact";

function Robot(props) {
  return (
    <MDBBox className={styles.robot}>
      <MDBRow>
        <MDBCol md="6" className={styles.robtxt}>
          <MDBBox>
            <MDBTypography tag="p" className={styles.press + " usersm"}>
              PRESS
            </MDBTypography>
            <MDBTypography tag="p" className={styles.rob_title + " bxl"}>
              The Robot
            </MDBTypography>
            <MDBBox className={styles.rob_content}>
              <MDBTypography tag="p" className={styles.rob_cont_theme + " bl"}>
                Robot doesn't care:
              </MDBTypography>
              <ul className={styles.rob_cont + " bl"}>
                <li>what day and time to go to work </li>
                <li>how much he will be paid for it</li>
                <li>how many streets, sites need to be cleaned </li>
                <li>whether there are conditions for work</li>
              </ul>
            </MDBBox>
          </MDBBox>
        </MDBCol>
        <MDBCol md="6" className={styles.robimg}>
          <img
            src="assets/pictures/about/icecleaner.png"
            alt="ice cleaner"
            className={styles.icecleaner}
          />
        </MDBCol>
      </MDBRow>
    </MDBBox>
  );
}

export default Robot;
