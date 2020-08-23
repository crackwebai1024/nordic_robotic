import React from "react";
import { MDBRow, MDBCol, MDBTypography } from "mdbreact";
import styles from "../footer.module.css";

const Items = (props) => {
  let item1 = [
    "Why Nordic Robotic ?",
    "Enterprise",
    "Security",
    "Customers",
    "Pricing",
    "Demo",
  ];
  let item2 = [
    "Sales",
    "IT",
    "Marketing",
    "Management",
    "Media",
    "Engineering",
  ];
  let item3 = ["Tips", "Blog", "Help Center", "API", "Directory", "Partners"];
  let item4 = ["About Us", "Leadership", "News", "Media Kit", "Career"];
  return (
    <MDBRow>
      <MDBCol lg="2" className={styles.padding1}></MDBCol>
      <MDBCol lg="2" md="3" sm="6" className={styles.product}>
        <MDBTypography tag="p" className={styles.topic + " sl"}>
          Product
        </MDBTypography>
        {item1.map((item) => (
          <MDBTypography tag="p" className={styles.item + " usersm"}>
            {item}
          </MDBTypography>
        ))}
      </MDBCol>
      <MDBCol lg="2" md="3" sm="6" className={styles.organization}>
        <MDBTypography tag="p" className={styles.topic + " sl"}>
          Organization
        </MDBTypography>
        {item2.map((item) => (
          <MDBTypography tag="p" className={styles.item + " usersm"}>
            {item}
          </MDBTypography>
        ))}
      </MDBCol>
      <MDBCol lg="2" md="3" sm="6" className={styles.resources}>
        <MDBTypography tag="p" className={styles.topic + " sl"}>
          Resources
        </MDBTypography>
        {item3.map((item) => (
          <MDBTypography tag="p" className={styles.item + " usersm"}>
            {item}
          </MDBTypography>
        ))}
      </MDBCol>
      <MDBCol lg="2" md="3" sm="6" className={styles.company}>
        <MDBTypography tag="p" className={styles.topic + " sl"}>
          Company
        </MDBTypography>
        {item4.map((item) => (
          <MDBTypography tag="p" className={styles.item + " usersm"}>
            {item}
          </MDBTypography>
        ))}
      </MDBCol>
      <MDBCol md="2"></MDBCol>
    </MDBRow>
  );
};

export default Items;
