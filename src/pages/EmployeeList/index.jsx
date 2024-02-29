import styles from "./EmployeeList.module.css";
import { Link } from "react-router-dom"
import TableComponent from "../../components/Table";
import React from "react";


/**
 * Function component EmployeeList - Represent the EmployeeList Page
 * @returns {JSX.Element} The rendered EmployeeList component.
 */
export default function EmployeeList() {
    // console.log(storage);
    return (
        <div>
            <h1 className={styles.h1}>Current Employees</h1>
            <main className={styles.main}>
                <Link to="/">Home</Link>
                <TableComponent />
            </main>
        </div>
    );
};