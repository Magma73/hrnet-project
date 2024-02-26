import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Root() {
    return (
        <>
            <div>
                <Main>
                    <Outlet />
                </Main>
            </div>
        </>
    );
}