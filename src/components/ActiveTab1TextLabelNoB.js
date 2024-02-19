import { useMemo } from "react";
import styles from "./ActiveTab1TextLabelNoB.module.css";

const ActiveTab1TextLabelNoB = ({
  activeTab1TextLabelNoBWidth,
  activeTab1TextLabelNoBHeight,
  activeTab1TextLabelNoBPosition,
  activeTab1TextLabelNoBTop,
  activeTab1TextLabelNoBLeft,
  frameIconLeft,
  frameIconLeft1,
  frameIconLeft2,
  frameDivLeft,
}) => {
  const activeTab1TextLabelNoBStyle = useMemo(() => {
    return {
      width: activeTab1TextLabelNoBWidth,
      height: activeTab1TextLabelNoBHeight,
      position: activeTab1TextLabelNoBPosition,
      top: activeTab1TextLabelNoBTop,
      left: activeTab1TextLabelNoBLeft,
    };
  }, [
    activeTab1TextLabelNoBWidth,
    activeTab1TextLabelNoBHeight,
    activeTab1TextLabelNoBPosition,
    activeTab1TextLabelNoBTop,
    activeTab1TextLabelNoBLeft,
  ]);

  const frameIconStyle = useMemo(() => {
    return {
      left: frameIconLeft,
    };
  }, [frameIconLeft]);

  const frameIcon1Style = useMemo(() => {
    return {
      left: frameIconLeft1,
    };
  }, [frameIconLeft1]);

  const frameIcon2Style = useMemo(() => {
    return {
      left: frameIconLeft2,
    };
  }, [frameIconLeft2]);

  const frameDivStyle = useMemo(() => {
    return {
      left: frameDivLeft,
    };
  }, [frameDivLeft]);

  return (
    <div
      className={styles.activeTab1TextLabelnoB}
      style={activeTab1TextLabelNoBStyle}
    >
      <img
        className={styles.activeTab1TextLabelnoBChild}
        alt=""
        src="/frame-23.svg"
        style={frameIconStyle}
      />
      <img
        className={styles.activeTab1TextLabelnoBItem}
        alt=""
        src="/frame-22.svg"
        style={frameIcon1Style}
      />
      <img
        className={styles.activeTab1TextLabelnoBInner}
        alt=""
        src="/frame-21.svg"
        style={frameIcon2Style}
      />
      <div className={styles.vuesaxbulkhome2Parent} style={frameDivStyle}>
        <img
          className={styles.vuesaxbulkhome2Icon}
          alt=""
          src="/vuesaxbulkhome2.svg"
        />
        <div className={styles.home}>Home</div>
        <img className={styles.unionIcon} alt="" src="/union.svg" />
      </div>
    </div>
  );
};

export default ActiveTab1TextLabelNoB;
