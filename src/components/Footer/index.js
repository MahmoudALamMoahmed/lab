import React from "react";
import styles from "./footer.module.css";
import Counter from "../counter/counter";
const Footer = () => {
  
  return (
    <footer className={styles.container}>
      <h3>Copy Right &#169; To MA Coding Company Limited</h3>
      <Counter/>
    </footer>
  );
};

export default Footer;
