import React, { useState } from "react";
import styles from "../about.module.css";
import { MDBBox, MDBRow, MDBCol, MDBLink } from "mdbreact";

const Menu = (props) => {
  const [active, setActive] = useState("1");
  return (
    <MDBBox className={styles.menu}>
      <MDBRow>
        <MDBCol
          lg="3"
          className={
            styles.menuitem + " sl " + styles[active === "1" ? "active" : ""]
          }
        >
          <MDBLink
            to="#"
            className={styles.item1}
            onClick={() => setActive("1")}
          >
            Our Mission &amp; Values
          </MDBLink>
        </MDBCol>
        <MDBCol
          lg="3"
          className={
            styles.menuitem + " sl " + styles[active === "2" ? "active" : ""]
          }
        >
          <MDBLink
            to="#"
            className={styles.item2}
            onClick={() => setActive("2")}
          >
            Team &amp; Leadership
          </MDBLink>
        </MDBCol>
        <MDBCol
          lg="3"
          className={
            styles.menuitem + " sl " + styles[active === "3" ? "active" : ""]
          }
        >
          <MDBLink to="#" onClick={() => setActive("3")}>
            Press
          </MDBLink>
        </MDBCol>
        <MDBCol
          lg="3"
          className={
            styles.menuitem + " sl " + styles[active === "4" ? "active" : ""]
          }
        >
          <MDBLink to="#" onClick={() => setActive("4")}>
            Location
          </MDBLink>
        </MDBCol>
      </MDBRow>
    </MDBBox>
  );
};

export default Menu;
