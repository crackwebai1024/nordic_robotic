import React from "react";
import styles from "./products.module.css";
import SideBar from "./components/SideBar";
import { MDBBox, MDBRow } from "mdbreact";
import Content from "./components/Content";

const Products = (props) => {
  return (
    <MDBBox className="cont_container">
      {/* <MDBRow>
        <SideBar />
        <Content />
      </MDBRow> */}
    </MDBBox>
  );
};

export default Products;
