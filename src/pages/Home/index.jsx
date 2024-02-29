import styles from "./Home.module.css";
import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom"

const EmployeeForm = lazy(() => import('../../components/Form'));
/**
 * Function component Home - Represent the Home Page
 * @returns {JSX.Element} The rendered Home component.
 */
export default function Home() {

    return (
        <div>
            <h1 className={styles.h1} aria-level="1">HR Net</h1>
            <section className={styles.section}>
                <Link to="/employeelist">View Current Employees</Link>
                <h2 className={styles.h2} aria-level="2">Create Employee</h2>

                <Suspense fallback={<div>Loading</div>}>
                    <EmployeeForm />
                </Suspense>

            </section >
        </div>
    );
};
