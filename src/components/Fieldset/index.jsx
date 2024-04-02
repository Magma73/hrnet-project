import React from "react";
import styles from "./Fieldset.module.css";
/**
 * Function component Fieldset - Represent the Fieldset Component
 * @param {string} legend - The legend of the fieldset.
 * @param {ReactNode} children - The children components to be rendered inside the fieldset.
 * @returns {JSX.Element} The rendered Fieldset component.
 */
export default function Fieldset({ legend, children }) {
    return (
        <fieldset className={styles.fieldset}>
            <legend>{legend}</legend>
            {children}
        </fieldset>
    );
}