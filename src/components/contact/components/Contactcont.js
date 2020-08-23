import React from "react";
import styles from "../contact.module.css";
import { MDBBox, MDBRow, MDBCol, MDBTypography, MDBIcon } from "mdbreact";
import ContactForm from "./ContactForm";

function Contactcont(props) {
  return (
    <MDBBox className={styles.contact}>
      <MDBRow>
        <MDBCol md="6" className={styles.phone}>
          <img src="assets/pictures/contact/phone.png" alt="phone" />
          <MDBBox className={styles.contactcontent}>
            <MDBTypography tag="p" className={styles.address + " sl"}>
              Address
            </MDBTypography>
            <MDBTypography tag="p" className={styles.adcont + " usersm"}>
              Harju maakond, Tallin, Kesklinna linnaosa, Hobujaama tn 4, 10151,
              registration number is 14701315
            </MDBTypography>
            <MDBTypography
              tag="p"
              className={styles.address + " sl " + styles.contact}
            >
              Contact
            </MDBTypography>
            <MDBTypography tag="p" className={styles.cont_phone + " usersm"}>
              <img src="assets/pictures/contact/phoneicon.png" alt="phone" />+
              47 986 28 607
            </MDBTypography>
            <MDBTypography tag="p" className={styles.cont_mail + " usersm"}>
              <MDBIcon far icon="envelope" />
              nktqfp@gmail.com
            </MDBTypography>
          </MDBBox>
        </MDBCol>
        <MDBCol md="6" className={styles.cont_form}>
          <ContactForm />
        </MDBCol>
      </MDBRow>
    </MDBBox>
  );
}

export default Contactcont;
