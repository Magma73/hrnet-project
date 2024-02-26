import styled from 'styled-components'
import { Link, useRouteError } from "react-router-dom"

const Main = styled.main`
    display: flex;
    flex-direction:column;
    align-items: center;
`
const TitleH1 = styled.h1`
    text-align:center;
    font-size: 2em;
`

const TitleH2 = styled.h2`
`

export default function Error() {
    const error = useRouteError();
    return (
        <div>
            <TitleH1>Error page</TitleH1>
            <Main>
                <TitleH2>Error {error.status} {error.statusText}</TitleH2>
                <Link to="/">Back to Home Page</Link>
            </Main>
        </div>

    );
};