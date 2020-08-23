import React from "react";
import { MDBBox, MDBTypography } from "mdbreact";
import styles from "../cooperate.module.css";

const Partner = (props) => {
  return (
    <MDBBox className={styles.partner}>
      <MDBTypography tag="p" className={styles.pa_theme1 + " sxl"}>
        We are trusted by Our Partners
      </MDBTypography>
      <img
        src="assets/pictures/home/google.png"
        alt="google"
        className={styles.google + " " + styles.pic}
      />
      <img
        src="assets/pictures/home/space.png"
        alt="space"
        className={styles.space + " " + styles.pic}
      />
      <img
        src="assets/pictures/home/nasa.png"
        alt="nasa"
        className={styles.nasa + " " + styles.pic}
      />
      <img
        src="assets/pictures/home/apple.png"
        alt="apple"
        className={styles.apple + " " + styles.pic}
      />
      <img
        src="assets/pictures/home/tronrud.png"
        alt="tronrud"
        className={styles.tron + " " + styles.pic}
      />
      <img
        src="assets/pictures/cooperate/tesla.png"
        alt="tesla"
        className={styles.tesla + " " + styles.pic}
      />
      <img
        src="assets/pictures/home/kuka.png"
        alt="kuka"
        className={styles.kuka + " " + styles.pic}
      />
      <MDBBox className={styles.marginbox}></MDBBox>
    </MDBBox>
  );
};

export default Partner;
