import styled from 'styled-components'
import { Link } from "react-router-dom"
import { Outlet } from 'react-router-dom';

// import storage from 'redux-persist/lib/storage'

const Main = styled.main`
    display: flex;
    flex-direction:column;
    align-items: center;
`
const Title = styled.h1`
    text-align:center;
    font-size: 2em;
`

/**
 * Function component EmployeeList - Represent the EmployeeList Page
 * @returns {JSX.Element} The rendered EmployeeList component.
 */
export default function EmployeeList() {
    // console.log(storage);
    return (
        <div>
            <Title>Employee List</Title>

            <Main>
                <Link to="/">Home</Link>
                <Outlet />
            </Main>
        </div>
    );
};