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
    {
      url: "smarttrash",
      theme: "Smart Trash",
      content: "Recycle in usersmart",
    },
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
  let way = "";
  return (
    <MDBBox>
      <MDBRow className={styles.picrow}>
        {urls.map((item, key) => {
          if (key % 2 === 0) {
            way = "left";
          } else {
            way = "right";
          }
          return (
            <MDBCol md="6" className={styles[way]}>
              <MDBView hover zoom className={styles.viewwin}>
                <img
                  src={"assets/pictures/home/" + item.url + ".png"}
                  className={"img-fluid " + styles.pic}
                  alt=""
                />
                <MDBBox className={styles.pic_theme + " bxl"}>
                  {item.theme}
                </MDBBox>
                <MDBBox className={styles.pic_content + " sl"}>
                  {item.content}
                </MDBBox>
              </MDBView>
            </MDBCol>
          );
        })}
      </MDBRow>
    </MDBBox>
  );
};

export default PicContainer;
