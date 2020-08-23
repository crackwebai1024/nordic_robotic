import React from "react";
import styles from "../about.module.css";
import { MDBBox, MDBTypography, MDBRow } from "mdbreact";
import { valuesdata } from "../../../utility/data";
import ValueCard from "./ValueCard";

function Values(props) {
  return (
    <MDBBox>
      <MDBTypography
        tag="p"
        className={styles.mis_theme + " bxl"}
        style={{ marginTop: "80px" }}
      >
        Our Values
      </MDBTypography>
      <MDBBox className={styles.cardbox}>
        <MDBRow className={styles.cardrow}>
          {valuesdata.map((item, key) => (
            <MDBBox className={styles.cardwrapper}>
              <ValueCard
                url={item.url}
                theme={item.theme}
                content={item.content}
              />
              {(key === 1 || key === 0 || key === 3 || key === 4) && (
                <MDBBox className={styles.vertical_line}></MDBBox>
              )}
              {/* {(key === 0 || key === 1 || key === 2) && (
                <MDBBox className={styles.horizon_line}></MDBBox>
              )} */}
            </MDBBox>
          ))}
          <MDBBox className={styles.horizon_line}></MDBBox>
        </MDBRow>
      </MDBBox>
    </MDBBox>
  );
}

export default Values;
