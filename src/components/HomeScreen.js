import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CarOffersContainer from "./CarOffersContainer";
import ActiveTab1TextLabelNoB from "./ActiveTab1TextLabelNoB";
import CarListContainer from "./CarListContainer";
import styles from "./HomeScreen.module.css";

const HomeScreen = () => {
  const navigate = useNavigate();

  const onSUVsCarsContainerClick = useCallback(() => {
    navigate("/rent-page");
  }, [navigate]);

  const onElectricCarsContainerClick = useCallback(() => {
    navigate("/rent-page");
  }, [navigate]);

  const onSportsCarsContainerClick = useCallback(() => {
    navigate("/rent-page");
  }, [navigate]);

  return (
    <div className={styles.homeScreen}>
      <div className={styles.homeScreenChild} />
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
        <div className={styles.searchVehicleChild} />
        <img
          className={styles.akarIconssearch}
          alt=""
          src="/akariconssearch.svg"
        />
        <div className={styles.searchVehicle1}>Search vehicle</div>
      </div>
      <img className={styles.imageIcon} alt="" src="/image@2x.png" />
      <div className={styles.homeScreenItem} />
      <div className={styles.cars}>
        <div className={styles.sportsCars} onClick={onSportsCarsContainerClick}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <img
              className={styles.bmw840i2dCoupeBlue20211Icon}
              alt=""
              src="/bmw840i2dcoupeblue2021-1@2x.png"
            />
          </div>
          <b className={styles.sportsCars1}>Sports Cars</b>
          <div className={styles.startingFrom35}>Starting from $35 / Day</div>
          <b className={styles.startYourWeekContainer}>
            <p className={styles.startYourWeek}>{`Start Your Week `}</p>
            <p className={styles.startYourWeek}>In Style</p>
          </b>
          <div className={styles.weFound20OffersParent}>
            <b className={styles.weFound20}>We found 20 offers</b>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
        </div>
        <CarOffersContainer
          carDimensionsText="/bmw840i2dcoupeblue2021-11@2x.png"
          carCategoryText="SUVs Cars"
          carRentalPriceText="Starting from $55 / Day"
          carPromoText="Start Your Natural "
          offerCountText="We found 13 offers"
          onSUVsCarsContainerClick={onSUVsCarsContainerClick}
        />
        <CarOffersContainer
          carDimensionsText="/bmw840i2dcoupeblue2021-12@2x.png"
          carCategoryText="ELECTRIC Cars"
          carRentalPriceText="Starting from $85 / Day"
          carPromoText="Start Your Camp "
          offerCountText="We found 5 offers"
          propTop="264px"
          propBackgroundColor="#04d9ff"
          propLeft="192px"
          onSUVsCarsContainerClick={onElectricCarsContainerClick}
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
      <div className={styles.homeScreenInner} />
      <div className={styles.carbrands}>
        <div className={styles.carLogoPng16632Parent}>
          <img
            className={styles.carLogoPng16632Icon}
            alt=""
            src="/car-logo-png1663-2@2x.png"
          />
          <div className={styles.maseratiParent}>
            <div className={styles.maserati}>Maserati</div>
            <b className={styles.b}>+5</b>
          </div>
        </div>
        <CarListContainer
          carDimensionsId="/mercedes-png80145-2@2x.png"
          carBrandText="Mercedes"
          carModelCode="+32"
        />
        <div className={styles.download1Parent}>
          <img
            className={styles.download1Icon}
            alt=""
            src="/download-1@2x.png"
          />
          <div className={styles.maseratiParent}>
            <div className={styles.maserati}>TOGG</div>
            <b className={styles.b1}>+8</b>
          </div>
        </div>
        <div className={styles.carLogoPng16632Parent}>
          <img
            className={styles.carLogoPng16632Icon}
            alt=""
            src="/car-logo-png1663-21@2x.png"
          />
          <div className={styles.maseratiParent}>
            <div className={styles.maserati}>Porsche</div>
            <b className={styles.b}>+8</b>
          </div>
        </div>
        <CarListContainer
          carDimensionsId="/car-logo-png1641-2@2x.png"
          carBrandText="BMW"
          carModelCode="+12"
          propPadding="var(--padding-5xs) var(--padding-lg) var(--padding-5xs) 19px"
          propWidth="50px"
          propWidth1="unset"
        />
        <div className={styles.carLogoPng16611Parent}>
          <img
            className={styles.carLogoPng16611Icon}
            alt=""
            src="/car-logo-png1661-1@2x.png"
          />
          <div className={styles.maseratiParent}>
            <div className={styles.maserati}>Renault</div>
            <b className={styles.b}>+8</b>
          </div>
        </div>
        <CarListContainer
          carDimensionsId="/car-logo-png1663-21@2x.png"
          carBrandText="Porsche"
          carModelCode="+8"
          propPadding="var(--padding-5xs) var(--padding-lg) var(--padding-5xs) var(--padding-mid)"
          propWidth="39px"
          propWidth1="32px"
        />
      </div>
      <div className={styles.brandsParent}>
        <b className={styles.brands}>Brands</b>
        <div className={styles.seeAllParent}>
          <div className={styles.maserati}>See All</div>
          <img
            className={styles.arrowRight2}
            alt=""
            src="/arrow--right-2.svg"
          />
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <div className={styles.filterParent}>
          <b className={styles.filter}>Filter</b>
          <img className={styles.groupInner} alt="" src="/group-7349.svg" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
