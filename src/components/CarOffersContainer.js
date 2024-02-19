import { useMemo } from "react";
import styles from "./CarOffersContainer.module.css";

const CarOffersContainer = ({
  carDimensionsText,
  carCategoryText,
  carRentalPriceText,
  carPromoText,
  offerCountText,
  propTop,
  propBackgroundColor,
  propLeft,
  onSUVsCarsContainerClick,
}) => {
  const sUVsCarsStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const startYourNaturalContainerStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={styles.suvsCars}
      onClick={onSUVsCarsContainerClick}
      style={sUVsCarsStyle}
    >
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} style={rectangleDivStyle} />
        <img
          className={styles.bmw840i2dCoupeBlue20211Icon}
          alt=""
          src={carDimensionsText}
        />
      </div>
      <b className={styles.suvsCars1}>{carCategoryText}</b>
      <div className={styles.startingFrom55}>{carRentalPriceText}</div>
      <b
        className={styles.startYourNaturalContainer}
        style={startYourNaturalContainerStyle}
      >
        <p className={styles.startYourNatural}>{carPromoText}</p>
        <p className={styles.startYourNatural}>In Style</p>
      </b>
      <div className={styles.weFound13OffersParent}>
        <b className={styles.weFound13}>{offerCountText}</b>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </div>
    </div>
  );
};

export default CarOffersContainer;
