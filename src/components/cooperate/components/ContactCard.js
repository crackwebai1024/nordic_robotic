import React from "react";
import {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBTypography,
  MDBInput,
  MDBBtn,
} from "mdbreact";
import styles from "../cooperate.module.css";

function ContactCard(props) {
  return (
    <MDBCard className={styles.contactbox}>
      <MDBCardBody>
        <MDBTypography tag="p" className={styles.cardtheme + " sl"}>
          Leave your contact here
        </MDBTypography>
        <MDBInput label="Name" outline className={styles.data} />
        <MDBInput label="Email" outline className={styles.data} />
        <MDBInput
          label="Company/Organization"
          outline
          className={styles.data}
        />
        <MDBBtn className={styles.submitbtn} color="#">
          Send Inquiry
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}

export default ContactCard;
