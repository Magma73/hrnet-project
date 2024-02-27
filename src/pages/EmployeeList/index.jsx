import styles from "./EmployeeList.module.css";
import { Link } from "react-router-dom"
import { Outlet } from 'react-router-dom';

// import storage from 'redux-persist/lib/storage'

/**
 * Function component EmployeeList - Represent the EmployeeList Page
 * @returns {JSX.Element} The rendered EmployeeList component.
 */
export default function EmployeeList() {
    // console.log(storage);
    return (
        <div>
            <h1 className={styles.h1}>Employee Page</h1>
            <main className={styles.main}>
                <Link to="/">Home</Link>
                <Outlet />
            </main>
        </div>
    );
};