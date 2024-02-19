import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Splash.module.css";

const Splash = () => {
  const navigate = useNavigate();

  const onBtnBgClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.splash}>
      <img
        className={styles.unsplashwpvtt0mem00Icon}
        alt=""
        src="/unsplashwpvtt0mem00@2x.png"
      />
      <div className={styles.unsplashwpvtt0mem00} />
      <img className={styles.batteryIcon} alt="" src="/battery.svg" />
      <img className={styles.wifiIcon} alt="" src="/wifi.svg" />
      <img
        className={styles.iconMobileSignal}
        alt=""
        src="/icon--mobile-signal.svg"
      />
      <div className={styles.brandName}>
        <div className={styles.brandNameChild} />
        <div className={styles.brandNameItem} />
        <b className={styles.premierRenting}>
          <span>{`Premier `}</span>
          <span className={styles.renting}>Renting</span>
        </b>
      </div>
      <div className={styles.searchVehicle}>
        <div className={styles.akarIconssearch} />
      </div>
      <div className={styles.fieldBgParent}>
        <div className={styles.fieldBg} />
        <div className={styles.rajasekaran}>RAJASEKARAN</div>
        <div className={styles.fieldBg1} />
        <div className={styles.div}>****************</div>
        <div className={styles.btnBg} onClick={onBtnBgClick} />
        <div className={styles.logIn}>LOG IN</div>
      </div>
      <div className={styles.forgotPassword}>Forgot Password</div>
    </div>
  );
};

export default Splash;
