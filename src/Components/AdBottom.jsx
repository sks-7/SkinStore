import React from "react";
import { ImTruck, ImMobile } from "react-icons/im";
import { TbCoin } from "react-icons/tb";
import { FcTodoList } from "react-icons/fc";
import styles from "./AdBottom.module.css";

const AdBottom = () => {
  return (
    <>
      <div className={styles.AdBottom_mainCon}>
        <div className={styles.AdBottom_innerCon}>
          <div className={styles.AdBottom_div}>
            <ImTruck size="25px" />
            <p>FREE US Shipping Over $49</p>
          </div>
          <div className={styles.AdBottom_div}>
            <TbCoin size="25px" />
            <p>Refer a Friend, Get $15</p>
          </div>
          <div className={styles.AdBottom_div}>
            <FcTodoList size="25px" />
            <p>New Customers Save 20% - Use Code NEWBIE</p>
          </div>
          <div className={styles.AdBottom_div}>
            <ImMobile size="25px" />
            <p>Download Our App</p>
          </div>
        </div>
      </div>
      <div className={styles.AdBottom_mainCon_2}>
        <p>
          15% off with code SS15 + Neostrata Dark Spot Corrector (Worth $30) @
          $130 | Shop now
        </p>
      </div>
    </>
  );
};

export default AdBottom;
