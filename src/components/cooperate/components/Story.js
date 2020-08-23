import React from "react";
import { MDBBox, MDBRow, MDBCol, MDBTypography, MDBIcon } from "mdbreact";
import styles from "../cooperate.module.css";

const Story = (props) => {
  let story_contents = [
    "OUR LATEST PROJECTS",
    "Space X Sea Coal and Rock Mine",
    "Our latest project is rocks and satellite with SpaceX. We are collaborating to create rocks which is very different from common rocks. Our robot in this project also carry rocks with help of SpaceX that deliver to indusctry and make some for rockets developement.",
  ];
  let st_theme = ["st_theme1", "st_theme2", "st_theme3"];
  return (
    <MDBBox className={styles.story}>
      <MDBBox className={styles.circle}></MDBBox>
      <MDBRow>
        <MDBCol md="6">
          <MDBBox className={styles.storytxt}>
            {story_contents.map((item, key) => (
              <MDBTypography tag="p" className={styles[st_theme[key]]}>
                {item}
              </MDBTypography>
            ))}
            <MDBTypography
              tag="p"
              className={styles.st_theme1 + " " + styles.st_theme4}
            >
              Read more stories
              <MDBIcon icon="arrow-right" />
            </MDBTypography>
          </MDBBox>
        </MDBCol>
        <MDBCol md="6" className={styles.st_img}>
          <img src="assets/pictures/cooperate/ship.png" alt="ship" />
        </MDBCol>
      </MDBRow>
    </MDBBox>
  );
};

export default Story;
