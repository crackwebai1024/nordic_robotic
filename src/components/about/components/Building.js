import React from "react";
import styles from "../about.module.css";
import { MDBBox, MDBTypography } from "mdbreact";

const Building = (props) => {
  return (
    <MDBBox className={styles.building}>
      <img
        src="assets/pictures/about/buildingcover.png"
        alt="building"
        className={styles.piccover}
      />
      <MDBTypography tag="p" className={styles.intro + " bxl"}>
        We help bring new Innovation for future that Beyond Our Visibility
      </MDBTypography>
      <img
        src="assets/pictures/about/building.png"
        alt="building"
        className={styles.pic}
      />
    </MDBBox>
  );
};

export default Building;
