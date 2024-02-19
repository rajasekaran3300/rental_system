import { useMemo } from "react";
import styles from "./CarListContainer.module.css";

const CarListContainer = ({
  carDimensionsId,
  carBrandText,
  carModelCode,
  propPadding,
  propWidth,
  propWidth1,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const mercedesPNG801452IconStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const bStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={styles.mercedesPng801452Parent} style={frameDiv1Style}>
      <img
        className={styles.mercedesPng801452Icon}
        alt=""
        src={carDimensionsId}
        style={mercedesPNG801452IconStyle}
      />
      <div className={styles.mercedesParent}>
        <div className={styles.mercedes}>{carBrandText}</div>
        <b className={styles.b} style={bStyle}>
          {carModelCode}
        </b>
      </div>
    </div>
  );
};

export default CarListContainer;
