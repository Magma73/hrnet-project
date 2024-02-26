import "../../style/style.css";
import { Link, useRouteError } from "react-router-dom"

export default function Error() {
    const error = useRouteError();
    return (
        <div>
            <h1 className="titleh1">Error Page</h1>
            <main>
                <h2>Error {error.status} {error.statusText}</h2>
                <Link to="/">Back to Home Page</Link>
            </main>
        </div>

    );
};