import styles from "./Fieldset.module.css";
import React from "react";

export default function Fieldset({ legend, children }) {
    return (
      <fieldset className={styles.fieldset}>
        <legend>{legend}</legend>
        {children}
      </fieldset>
    );
  }