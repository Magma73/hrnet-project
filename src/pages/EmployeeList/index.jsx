import styled from 'styled-components'
import { Link } from "react-router-dom"

const Main = styled.main`
    display: flex;
    flex-direction:column;
    align-items: center;
`

const EmployeeList = () => {
    return (
        <Main>
            <Link to="/">Home</Link>
        </Main>
    );
};

export default EmployeeList