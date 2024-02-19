import { useCallback } from "react";
import ContainerBMW330i from "./ContainerBMW330i";
import { useNavigate } from "react-router-dom";
import ActiveTab1TextLabelNoB from "./ActiveTab1TextLabelNoB";
import styles from "./RentPage.module.css";

const RentPage = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.rentPage}>
      <div className={styles.rentPageChild} />
      <div className={styles.bmwGpParent}>
        <div className={styles.bmwGp}>
          <div className={styles.bmwGpChild} />
          <img
            className={styles.bmw2GranCoupe4dWhite2021Icon}
            alt=""
            src="/bmw2grancoupe4dwhite2021-1@2x.png"
          />
          <div className={styles.bmwGpItem} />
          <b className={styles.bmwGrandCoupe}>BMW Grand Coupe</b>
          <div className={styles.arabaZellikleri}>
            <div className={styles.gear}>
              <b className={styles.automatic}>Automatic</b>
              <img
                className={styles.iconParkSolidmanualGear}
                alt=""
                src="/iconparksolidmanualgear.svg"
              />
            </div>
            <div className={styles.doors}>
              <b className={styles.doors1}>5 Doors</b>
              <img
                className={styles.iconParkSolidmanualGear}
                alt=""
                src="/gameiconscardoor.svg"
              />
            </div>
            <div className={styles.km}>
              <b className={styles.doors1}>420 km</b>
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
        </div>
        <div className={styles.bmwGp}>
          <div className={styles.bmwGpChild} />
          <img
            className={styles.toggCardetailMobile11Icon}
            alt=""
            src="/toggcardetailmobile1-1@2x.png"
          />
          <b className={styles.toggAnadolu}>TOGG Anadolu</b>
          <div className={styles.arabaZellikleri}>
            <div className={styles.gear}>
              <b className={styles.automatic}>Automatic</b>
              <img
                className={styles.iconParkSolidmanualGear}
                alt=""
                src="/iconparksolidmanualgear.svg"
              />
            </div>
            <div className={styles.doors}>
              <b className={styles.doors1}>5 Doors</b>
              <img
                className={styles.iconParkSolidmanualGear}
                alt=""
                src="/gameiconscardoor.svg"
              />
            </div>
            <div className={styles.km}>
              <b className={styles.doors1}>280 km</b>
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
          <div className={styles.bmwGpItem} />
        </div>
        <ContainerBMW330i
          carDetailsCode="/kia-ceed@2x.png"
          carModelName="BMW 330i"
          transmissionType="Automatic"
          doorType="5 Doors"
          carMileage="350 km"
        />
        <ContainerBMW330i
          carDetailsCode="/kia-ceed1@2x.png"
          carModelName="Mini  Cooper"
          transmissionType="Automatic"
          doorType="3 Doors"
          carMileage="300 km"
        />
        <ContainerBMW330i
          carDetailsCode="/kia-ceed2@2x.png"
          carModelName="Toyota Rav"
          transmissionType="Automatic"
          doorType="5 Doors"
          carMileage="450 km"
        />
        <ContainerBMW330i
          carDetailsCode="/kia-ceed3@2x.png"
          carModelName="VW Jetta"
          transmissionType="Manual"
          doorType="5 Doors"
          carMileage="290 km"
        />
      </div>
      <div className={styles.rentPageItem} />
      <div className={styles.brandName}>
        <div className={styles.brandNameChild} />
        <div className={styles.brandNameItem} />
        <b className={styles.premierRenting}>
          <span>{`Premier `}</span>
          <span className={styles.renting}>Renting</span>
        </b>
      </div>
      <div className={styles.searchVehicle}>
        <div className={styles.searchVehicleChild} />
        <img
          className={styles.akarIconssearch}
          alt=""
          src="/akariconssearch1.svg"
        />
        <div className={styles.searchVehicle1}>Search vehicle</div>
      </div>
      <div className={styles.profile}>
        <img className={styles.imageIcon} alt="" src="/image1@2x.png" />
        <div className={styles.profileChild} />
      </div>
      <div className={styles.rentPageInner} />
      <img
        className={styles.vectorIcon}
        alt=""
        src="/vector1.svg"
        onClick={onVectorIconClick}
      />
      <div className={styles.topMenu}>
        <img className={styles.batteryIcon} alt="" src="/battery.svg" />
        <img className={styles.wifiIcon} alt="" src="/wifi.svg" />
        <img
          className={styles.iconMobileSignal}
          alt=""
          src="/icon--mobile-signal.svg"
        />
      </div>
      <ActiveTab1TextLabelNoB
        activeTab1TextLabelNoBWidth="390px"
        activeTab1TextLabelNoBHeight="66px"
        activeTab1TextLabelNoBPosition="absolute"
        activeTab1TextLabelNoBTop="778px"
        activeTab1TextLabelNoBLeft="0px"
        frameIconLeft="calc(50% - 89px)"
        frameIconLeft1="calc(50% - 1px)"
        frameIconLeft2="calc(50% + 86px)"
        frameDivLeft="calc(50% - 176px)"
      />
    </div>
  );
};

export default RentPage;
