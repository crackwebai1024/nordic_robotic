import React from "react";
import styles from "./products.module.css";
import SideBar from "./components/SideBar";
import { MDBBox, MDBRow } from "mdbreact";

const Products = (props) => {
  return (
    <MDBBox className="cont_container">
      <MDBRow>
        <SideBar />
      </MDBRow>
    </MDBBox>
  );
};

export default Products;
