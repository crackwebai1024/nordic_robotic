import React from "react";
import { MDBBox, MDBCol, MDBRow, MDBView } from "mdbreact";
import styles from "../home.module.css";

const PicContainer = (props) => {
  let urls = [
    {
      url: "u_super",
      theme: "U Supercharge",
      content: "Beyond Superior Support",
    },
    {
      url: "brynhilda",
      theme: "Brynhilda",
      content: "Impactful Clearing Machine",
    },
    {
      url: "medrob",
      theme: "Med Rob",
      content: "A Revolutionary Medical Support",
    },
    {
      url: "millerdrown",
      theme: "Miller Drone",
      content: "Explore The Posibilities",
    },
    { url: "smarttrash", theme: "Smart Trash", content: "Recycle in Smart" },
    {
      url: "roadbuildinger",
      theme: "Road Buildinger",
      content: "Build Road Faster",
    },
    { url: "unrobot", theme: "Un Robot", content: "Deep and Find" },
    { url: "rocketskips", theme: "Rocket Skips", content: "New Way of Launch" },
    {
      url: "pipeclean",
      theme: "Smart Pipeline Cleaner",
      content: "Clean Pipeline Easily",
    },
    {
      url: "offshore",
      theme: "Offshore Robot",
      content: "Help Dive Offshore,",
    },
  ];
  return (
    <MDBBox>
      <MDBRow>
        {urls.map((item) => (
          <MDBCol md="6" className={styles.col}>
            <MDBView hover zoom className={styles.viewwin}>
              <img
                src={"assets/pictures/home/" + item.url + ".png"}
                className={"img-fluid " + styles.pic}
                alt=""
              />
              <MDBBox className={styles.pic_theme}>{item.theme}</MDBBox>
              <MDBBox className={styles.pic_content}>{item.content}</MDBBox>
            </MDBView>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBBox>
  );
};

export default PicContainer;
