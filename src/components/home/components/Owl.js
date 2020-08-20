import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "../home.module.css";

class Owl extends React.Component {
  render() {
    return (
      <OwlCarousel className="owl-theme" loop nav items={5} autoplay={true}>
        <div>
          <img
            src={"assets/pictures/home/google.png"}
            alt="google"
            className={styles.owl}
          />
        </div>
        <div>
          <img
            src={"assets/pictures/home/nasa.png"}
            alt="nasa"
            className={styles.owl}
          />
        </div>
        <div>
          <img
            src={"assets/pictures/home/kuka.png"}
            alt="kuka"
            className={styles.owl}
          />
        </div>
        <div>
          <img
            src={"assets/pictures/home/apple.png"}
            alt="apple"
            className={styles.owl}
          />
        </div>
        <div>
          <img
            src={"assets/pictures/home/space.png"}
            alt="space"
            className={styles.owl}
          />
        </div>
        <div>
          <img
            src={"assets/pictures/home/tronrud.png"}
            alt="tronrud"
            className={styles.owl}
          />
        </div>
      </OwlCarousel>
    );
  }
}

export default Owl;
