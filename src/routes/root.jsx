import { Outlet } from "react-router-dom";

/**
 * Function component Root - Represents the root component for routing.
 * @returns {JSX.Element} The rendered Root component.
 */

export default function Root() {
    return (
        <>
            <div >
                <Outlet />
            </div>
        </>
    );
}