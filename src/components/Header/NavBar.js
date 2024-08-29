"use client";

import React from "react";
import { navItems } from "./navItem";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";
import Link from "next/link";

const NavBar = () => {
  const path = usePathname();

  return (
    <section className={styles.navbar}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={path == item.href ? styles.active : ""}
        >
          {item.label}
        </Link>
      ))}
    </section>
  );
};

export default NavBar;
