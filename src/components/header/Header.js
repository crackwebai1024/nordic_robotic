import React, { useState } from "react";
import styles from "./header.module.css";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("1");
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  return (
    <MDBNavbar dark expand="md" className={`sticky-top ${styles.wrapper}`}>
      <MDBNavbar className={`ml-auto ${styles.content}`}>
        <MDBNavbarBrand>
          <img
            src="../../assets/pictures/header/brand.png"
            alt="brand"
            data-no-retina=""
            className={styles.brand}
          />
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav left className={styles.leftmenu}>
            <MDBNavItem
              className={active === "1" ? "active" : ""}
              onClick={() => setActive("1")}
            >
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem
              className={active === "2" ? "active" : ""}
              onClick={() => setActive("2")}
            >
              <MDBNavLink to="/products">Products</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem
              className={active === "3" ? "active" : ""}
              onClick={() => setActive("3")}
            >
              <MDBNavLink to="/cooperation">Cooperation</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem
              className={active === "4" ? "active" : ""}
              onClick={() => setActive("4")}
            >
              <MDBNavLink to="/about">About us</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem
              className={active === "5" ? "active" : ""}
              onClick={() => setActive("5")}
            >
              <MDBNavLink to="/contact">Contact</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavbarBrand>
              <img
                src="../../assets/pictures/header/uservec.png"
                alt="brand"
                data-no-retina=""
                className={styles.user}
              />
            </MDBNavbarBrand>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </MDBNavbar>
  );
};

export default Header;
