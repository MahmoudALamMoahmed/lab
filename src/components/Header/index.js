import React from "react";
import styles from "./header.module.css";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.logo}>MA Coding</h1>
      <NavBar />
    </header>
  );
};

export default Header;
