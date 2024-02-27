import styles from "./Home.module.css";
import React from "react";
import { Link } from "react-router-dom"
import EmployeeForm from "../../components/Form";

// const EmployeeForm = lazy(() => import('../../components/Form'));
/**
 * Function component Home - Represent the Home Page
 * @returns {JSX.Element} The rendered Home component.
 */
export default function Home() {

    return (
        <div>
            <h1 className={styles.h1}>HR Net</h1>
            <section className={styles.section}>
                <Link to="/employeelist">View Current Employees</Link>
                <h2 className={styles.h2}>Create Employee</h2>

                <EmployeeForm />

            </section >
        </div>
    );
};
