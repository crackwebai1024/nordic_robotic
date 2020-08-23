import React from "react";
import styles from "../about.module.css";
import { MDBBox, MDBTypography } from "mdbreact";

function ValueCard(props) {
  const { url, theme, content } = props;
  return (
    <MDBBox className={styles.valuecard}>
      <img src={url} />
      <MDBTypography tag="p" className={styles.cardtheme + " sl"}>
        {theme}
      </MDBTypography>
      <MDBTypography tag="p" className={styles.cardcontent + " bm"}>
        {content}
      </MDBTypography>
    </MDBBox>
  );
}

export default ValueCard;
