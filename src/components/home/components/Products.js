import React from "react";
import styles from "../home.module.css";
import { MDBBox, MDBTypography, MDBIcon, MDBBtn } from "mdbreact";

const Products = () => {
  return (
    <MDBBox>
      <MDBBox className={styles.prostage1}>
        <MDBTypography
          tag="p"
          className={styles.comtxt + " usersm " + styles.pro_theme1}
        >
          OUR PRODUCTS
        </MDBTypography>
        <MDBTypography
          tag="p"
          className={
            styles.comtxt +
            " " +
            styles.pro_theme1 +
            " bxl " +
            styles.pro_theme2
          }
        >
          Med Robot
        </MDBTypography>
      </MDBBox>
      <MDBBox className={styles.prostage2}>
        <img
          src="assets/pictures/home/robot_charge.png"
          alt="robot charge"
          className={styles.pro_robot}
        />
        <img
          src="assets/pictures/home/whitecircles.png"
          alt="circles"
          className={styles.pro_circles}
        />
        <img
          src="assets/pictures/home/housefade.png"
          alt="backgroundhouse"
          className={styles.pro_fadehouse}
        />
        {/* <img
          src="assets/pictures/home/circlepur.png"
          alt="colorcircle"
          className={styles.pro_colorcircle}
        /> */}
        <MDBBox className={styles.pro_colorcircle}></MDBBox>
        <MDBBox className={styles.pro_theme3 + " sl"}>
          This one is med rob which can fly and give the patient the treatment
          they need inside of the robot, the doctor can do any type of surgery
          inside the robot.
        </MDBBox>
        <MDBTypography
          tag="p"
          className={styles.comtxt + " usersm " + styles.pro_theme4}
        >
          Check more products
          <img src="assets/pictures/home/whitearrow.png" alt="arrow"></img>
        </MDBTypography>
        <MDBTypography
          tag="p"
          className={styles.comtxt + " sl " + styles.pro_theme5}
        >
          Next : <strong>Miller Drone</strong>
        </MDBTypography>
        <MDBBtn className={styles.pro_leftarrow}>
          <MDBIcon icon="angle-left" className={styles.white} size="lg" />
        </MDBBtn>
        <MDBBtn className={styles.pro_rightarrow} color="indigo">
          <MDBIcon icon="angle-right" className={styles.white} size="lg" />
        </MDBBtn>
      </MDBBox>
    </MDBBox>
  );
};

export default Products;
