import React from "react";
import styles from "./NotFound.module.scss";

const NotFound: React.FC = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.skyBg}></div>
      <div className={styles.wave7}></div>
      <div className={styles.wave6}></div>
      <a className={styles.waveIsland} href="#">
        <img
          src="http://res.cloudinary.com/andrewhani/image/upload/v1524501929/404/island.svg"
          alt="Island"
        />
      </a>
      <div className={styles.wave5}></div>
      <div className={styles.waveLost}>
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </div>
      <div className={styles.wave4}></div>
      <div className={styles.waveBoat}>
        <img
          className={styles.boat}
          src="http://res.cloudinary.com/andrewhani/image/upload/v1524501894/404/boat.svg"
          alt="Boat"
        />
      </div>
      <div className={styles.wave3}></div>
      <div className={styles.wave2}></div>
      <div className={styles.wave1}></div>
      <div className={styles.waveMessage}>
        <p>You're lost</p>
        <p>Click on the island to return</p>
      </div>
    </div>
  );
};

export default React.memo(NotFound);
