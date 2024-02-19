import styles from "./ContainerBMW330i.module.css";

const ContainerBMW330i = ({
  carDetailsCode,
  carModelName,
  transmissionType,
  doorType,
  carMileage,
}) => {
  return (
    <div className={styles.bmw330}>
      <div className={styles.bmw330Child} />
      <img className={styles.kiaCeedIcon} alt="" src={carDetailsCode} />
      <b className={styles.bmw330i}>{carModelName}</b>
      <div className={styles.arabaZellikleri}>
        <div className={styles.gear}>
          <b className={styles.automatic}>{transmissionType}</b>
          <img
            className={styles.iconParkSolidmanualGear}
            alt=""
            src="/iconparksolidmanualgear.svg"
          />
        </div>
        <div className={styles.doors}>
          <b className={styles.doors1}>{doorType}</b>
          <img
            className={styles.iconParkSolidmanualGear}
            alt=""
            src="/gameiconscardoor.svg"
          />
        </div>
        <div className={styles.km}>
          <b className={styles.doors1}>{carMileage}</b>
          <img
            className={styles.iconParkSolidmanualGear}
            alt=""
            src="/fileiconsfuelux.svg"
          />
        </div>
        <div className={styles.ac}>
          <img
            className={styles.iconParkSolidmanualGear}
            alt=""
            src="/materialsymbolsacunitrounded.svg"
          />
          <b className={styles.aC}>A / C</b>
        </div>
      </div>
      <div className={styles.bmw330Item} />
    </div>
  );
};

export default ContainerBMW330i;
