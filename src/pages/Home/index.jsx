import styled from 'styled-components'
import { Link } from "react-router-dom"

const Main = styled.main`
    display: flex;
    flex-direction:column;
    align-items: center;
`

const TitleH2 = styled.h2`
`

const Home = () => {
    return (

        <Main>
            <Link to="/employeelist">View Current Employees</Link>
            <TitleH2>Create Employee</TitleH2>
        </Main>

    );
};
export default Home