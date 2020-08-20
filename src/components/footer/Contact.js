import React from "react";
import {
  MDBBox,
  MDBTypography,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";
import styles from "./footer.module.css";

function Contact(props) {
  return (
    <MDBRow className={styles.contact}>
      <MDBCol md="6">
        <MDBBox className={styles.subscribe}>
          <MDBBox className={styles.news}>
            <MDBTypography tag="p" className={styles.newscontent}>
              Subscribe for newsletter
            </MDBTypography>
          </MDBBox>
          <MDBBox className={styles.subbtnwrapper}>
            <MDBBtn className={styles.subbtn} color="#">
              Subscribe Now
            </MDBBtn>
          </MDBBox>
        </MDBBox>
      </MDBCol>
      <MDBCol md="6" className={styles.icontact}>
        <MDBBox className={styles.iconbox}>
          <MDBBox className={styles.circle}>
            <MDBIcon fab icon="facebook-f" />
          </MDBBox>
          <MDBBox className={styles.circle}>
            <MDBIcon fab icon="twitter" />
          </MDBBox>
          <MDBBox className={styles.circle}>
            <img src="assets/pictures/footer/instagram.png" alt="instagram" />
          </MDBBox>
          <MDBBox className={styles.circle}>
            <MDBIcon fab icon="linkedin" />
          </MDBBox>
        </MDBBox>
        <MDBBox className={styles.contactbox}>
          <MDBTypography tag="p" className={styles.theme1}>
            Contact Us
          </MDBTypography>
          <MDBTypography tag="p" className={styles.theme2}>
            <img src="assets/pictures/footer/phone.png" alt="phone" />
            &nbsp;&nbsp;&nbsp;&nbsp;+47 986 28 607
          </MDBTypography>
          <MDBTypography tag="p" className={styles.theme2}>
            <MDBIcon far icon="envelope" />
            &nbsp;&nbsp;&nbsp;&nbsp;nktqfp@gmail.com
          </MDBTypography>
        </MDBBox>
      </MDBCol>
    </MDBRow>
  );
}

export default Contact;
