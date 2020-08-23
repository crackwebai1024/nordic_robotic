import React from "react";
import styles from "../contact.module.css";
import {
  MDBCard,
  MDBCardBody,
  MDBTypography,
  MDBInput,
  MDBBtn,
} from "mdbreact";

function ContactForm(props) {
  return (
    <MDBCard className={styles.contactform}>
      <MDBCardBody>
        <MDBTypography tag="p" className={styles.cardtheme + " sl"}>
          Send a message
        </MDBTypography>
        <MDBInput label="Name" outline className={styles.data} />
        <MDBInput label="Email" outline className={styles.data} />
        <MDBInput
          label="Tell us something..."
          type="textarea"
          rows="5"
          outline
          className={styles.txt}
        />
        <MDBBtn className={styles.submitbtn} color="#">
          Send Now
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}

export default ContactForm;
