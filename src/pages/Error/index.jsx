import styled from 'styled-components'
import { Link, useRouteError } from "react-router-dom"

const Main = styled.main`
    display: flex;
    flex-direction:column;
    align-items: center;
`
const Title = styled.h2`
`

export default function Error() {
    const error = useRouteError();
    return (
        <Main>
            <Title>Error {error.status} {error.statusText}</Title>
            <Link to="/">Back to Home Page</Link>
        </Main>
    );
};