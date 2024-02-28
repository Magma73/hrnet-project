import styles from "./Error.module.css";
import { Link, useRouteError } from "react-router-dom"

/**
 * Function component Error - Represents an error page component.
 * @returns {JSX.Element} The rendered Error component.
 */
export default function Error() {
    const error = useRouteError();
    return (
        <div>
            <h1 className={styles.h1}>Error Page</h1>
            <main className={styles.main}>
                <h2 className={styles.h2}>Error {error.status} {error.statusText}</h2>
                <Link to="/">Back to Home Page</Link>
            </main>
        </div>

    );
};