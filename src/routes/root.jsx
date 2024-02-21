import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Root() {
    return (
        <>
            <div>
                <Header />
                <Main>
                    <Outlet />
                </Main>
            </div>
        </>
    );
}