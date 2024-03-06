import { Link } from "react-router-dom"
import TableComponent from "../../components/Table";
import React from "react";
import styles from "./EmployeeList.module.css";


/**
 * Function component EmployeeList - Represent the EmployeeList Page
 * @returns {JSX.Element} The rendered EmployeeList component.
 */
export default function EmployeeList() {
    // console.log(storage);
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Current Employees</h1>
            <main className={styles.main}>
                <TableComponent />
                <Link to="/" className={styles.homeLink}>Home</Link>
            </main>
        </div>

    );
};