import React from "react";
import PropTypes from 'prop-types';
import styles from "./Fieldset.module.css";
/**
 * Function component Fieldset - Represent the Fieldset Component
 * @param {string} legend - The legend of the fieldset.
 * @param {ReactNode} children - The children components to be rendered inside the fieldset.
 * @returns {JSX.Element} The rendered Fieldset component.
 */
const Fieldset = ({ legend, children }) => {
    return (
        <fieldset className={styles.fieldset}>
            <legend>{legend}</legend>
            {children}
        </fieldset>
    );
};

Fieldset.propTypes = {
    legend: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default Fieldset;