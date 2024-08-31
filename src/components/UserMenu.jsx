// src/components/UserMenu.jsx

import React from "react";
import { HiUser } from "react-icons/hi";
import styles from "./css/UserMenu.module.css"; // Імпорт CSS Module

export default function UserMenu({ name }) {
  return (
    <div>
      <p>
        <HiUser className={styles.myIcon} size="24" /> {name}
      </p>
    </div>
  );
}
