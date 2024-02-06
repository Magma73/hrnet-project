import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

const HeaderComponent = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    font-size: 2em;
`

const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isEmployeeListPage = location.pathname === '/employeelist';

    return (
        <HeaderComponent>
            <Title>{isHomePage ? "HRnet" : isEmployeeListPage ? "Current Employees" : "Page error 404"}</Title>
        </HeaderComponent>
    )
}

export default Header