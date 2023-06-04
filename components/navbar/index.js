import React from "react";
import styles from "../style";
import NavbarCom from "./Navbar";

export default function Navbar() {
  return (
    <>
      <nav className={` bg-primary ${styles.paddingX} sm:${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <NavbarCom />
        </div>
      </nav>
    </>
  );
}
