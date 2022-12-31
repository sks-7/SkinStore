import React from "react";
import styles from "./SideSortBar.module.css";
const SideSortBar = ({ handleSelect }) => {
  return (
    <div>
      <div className={styles.SideSortBar_MainDIv}>
        <div className={styles.SideSortBar_RefineTile}>
          <p>REFINE</p>
          <br />
          <hr />
        </div>
        <br />
        <div className={styles.SideSortBar_InnerDIv}>
          <div className={styles.SideSortBar_Title}>
            <p>Brand</p>
          </div>
          <hr />
          <div className={styles.CheckBox_maindiv}>
            <div className={styles.CheckBox_div}>
              <input type="checkbox" value="111SKIN" name="Brand" onChange={handleSelect} />
              <p>111SKIN</p>
            </div>
            <div className={styles.CheckBox_div}>
              <input type="checkbox" value="3LAB" name="Brand" onChange={handleSelect} />
              <p>3LAB</p>
            </div>
            <div className={styles.CheckBox_div}>
              <input type="checkbox" value="Aesop" name="Brand" onChange={handleSelect} />
              <p>Aesop</p>
            </div>
            <div className={styles.CheckBox_div}>
              <input type="checkbox" value="AHAVA" name="Brand" onChange={handleSelect} />
              <p>AHAVA</p>
            </div>
            <div className={styles.CheckBox_div}>
              <input type="checkbox" value="Alchimie" name="Brand" onChange={handleSelect} />
              <p>Alchimie</p>
            </div>
            <div className={styles.CheckBox_div}>
              <input type="checkbox" value="Alo" name="Brand" onChange={handleSelect} />
              <p>Alo</p>
            </div>
            <div className={styles.CheckBox_div}>
              <input type="checkbox" value="Alpha" name="Brand" onChange={handleSelect} />
              <p>Alpha</p>
            </div>
          </div>
        </div>
        <br />
        <div className={styles.SideSortBar_InnerDIv}>
          <div className={styles.SideSortBar_Title}>
            <p>Gender</p>
          </div>
          <hr />
          <div className={styles.CheckBox_maindiv}>
            <div className={styles.CheckBox_div}>
              <input type="checkbox" value="Boys" name="Catergory" onChange={handleSelect} />
              <p>Boys</p>
            </div>
            <div className={styles.CheckBox_div}>
              <input type="checkbox" value="Girls" name="Catergory" onChange={handleSelect} />
              <p>Girls</p>
            </div>
            <div className={styles.CheckBox_div}>
              <input type="checkbox" value="Men" name="Catergory" onChange={handleSelect} />
              <p>Men</p>
            </div>
            <div className={styles.CheckBox_div}>
              <input type="checkbox" value="Women" name="Catergory" onChange={handleSelect} />
              <p>Women</p>
            </div>
          </div>
        </div>
        <br />
        <div className={styles.SideSortBar_InnerDIv}>
          <div className={styles.SideSortBar_Title}>
            <p>Skincare Product Type</p>
          </div>
          <hr />
          <div className={styles.CheckBox_maindiv}>
            <div className={styles.CheckBox_div}>
              <input type="checkbox" value="Serums" onChange={handleSelect} />
              <p>Serums</p>
            </div>
            <div className={styles.CheckBox_div}>
              <input
                type="checkbox"
                value="Moisturizers"
                onChange={handleSelect}
              />
              <p>Moisturizers</p>
            </div>
            <div className={styles.CheckBox_div}>
              <input type="checkbox" value="Toners" onChange={handleSelect} />
              <p>Toners</p>
            </div>
            <div className={styles.CheckBox_div}>
              <input type="checkbox" value="Masks" onChange={handleSelect} />
              <p>Masks</p>
            </div>
            <div className={styles.CheckBox_div}>
              <input
                type="checkbox"
                value="Treatments"
                onChange={handleSelect}
              />
              <p>Treatments</p>
            </div>
            <div className={styles.CheckBox_div}>
              <input
                type="checkbox"
                value="Exfoliators"
                onChange={handleSelect}
              />
              <p>Exfoliators</p>
            </div>
            <div className={styles.CheckBox_div}>
              <input type="checkbox" value="Oils" onChange={handleSelect} />
              <p>Oils</p>
            </div>
          </div>
        </div>
        <br />
        <div className={styles.SideSortBar_InnerDIv}>
          <div className={styles.SideSortBar_Title}>
            <p>SPF Content</p>
          </div>
          <hr />
          <div className={styles.CheckBox_maindiv}>
            <div className={styles.CheckBox_div}>
              <input type="checkbox" value="Low SPF" name="SPFCONTENT" onChange={handleSelect} />
              <p>Low SPF</p>
            </div>
            <div className={styles.CheckBox_div}>
              <input type="checkbox" value="No SPF" name="SPFCONTENT" onChange={handleSelect} />
              <p>No SPF</p>
            </div>
            <div className={styles.CheckBox_div}>
              <input type="checkbox" value="SPF 15" name="SPFCONTENT" onChange={handleSelect} />
              <p>SPF 15+</p>
            </div>
            <div className={styles.CheckBox_div}>
              <input type="checkbox" value="SPF 30" name="SPFCONTENT" onChange={handleSelect} />
              <p>SPF 30+</p>
            </div>
            <div className={styles.CheckBox_div}>
              <input
                type="checkbox"
                value="SPF 50"
                name="SPFCONTENT"
                onChange={handleSelect}
              />
              <p>SPF 50+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideSortBar;
