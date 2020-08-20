import React from "react";
import styles from "./home.module.css";
import { MDBBox } from "mdbreact";
import SuperCharger from "./components/SuperCharger";
import Intro from "./components/Intro";
import WhyUs from "./components/WhyUs";
import Products from "./components/Products";
import PicContainer from "./components/PicContainer";
import OurClient from "./components/OurClient";
import Owl from "./components/Owl";

const Home = (props) => {
  return (
    <MDBBox className={styles.container}>
      <SuperCharger />
      <Intro />
      <WhyUs />
      <Products />
      <PicContainer />
      <OurClient />
      <Owl />
    </MDBBox>
  );
};

export default Home;
