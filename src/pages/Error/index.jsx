import styled from 'styled-components'
import { Link } from "react-router-dom"

const Main = styled.main`
    display: flex;
    flex-direction:column;
    align-items: center;
`

const Error = () => {
    return (
        <Main>
            <Link to="/">Back to Home Page</Link>
        </Main>
    );
};
export default Error