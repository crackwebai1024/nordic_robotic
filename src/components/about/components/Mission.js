import React from "react";
import { MDBBox, MDBView, MDBTypography } from "mdbreact";
import styles from "../about.module.css";

function Mission(props) {
  return (
    <MDBBox className={styles.mis_wrapper}>
      <MDBView className={styles.mis_pic}>
        <img src="assets/pictures/about/mountainflag.png" alt="mission" />
      </MDBView>
      <MDBTypography tag="p" className={styles.mis_theme + " bxl"}>
        Our Mission
      </MDBTypography>
      <MDBTypography tag="p" className={styles.mis_topic + " bl"}>
        Our mission is to create a new society where robots are essential part
        of the mankind. We want you to love winter the way we do. Snowdrifts,
        rubble, sleet will no longer be a headache for managers, owners,
        entrepreneurs. People will forget about hours spent in traffic
        congestions because of unclean roads, risks of car accidents because of
        ice and snow on the roads.
      </MDBTypography>
      <MDBTypography tag="p" className={styles.mis_subtopic + " bm"}>
        It is not necessary to deal with the snow, spend the budget on
        utilities, to attract third-party organizations, equipment, to overpay
        people for night work, to persuade to go out on holidays and weekends.
      </MDBTypography>
    </MDBBox>
  );
}

export default Mission;
