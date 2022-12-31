import styled from "@emotion/styled";
import React from "react";
import AdBottom from "./AdBottom";
import Navbar from "./NavBar";
import NavBarMenu from "./NavBarMenu";
import styles from "./OneNavbar.module.css";

const OneNavbar = () => {
  return (
    <div className={styles.OneNavbar}>
      <Navbar />
      <NavBarMenu />
      <AdBottom />
    </div>
  );
};

export default OneNavbar;
