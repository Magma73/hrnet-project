import styled from 'styled-components'

const HeaderComponent = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    font-size: 2em;
`

export default function Header({ title }) {

    return (
        <HeaderComponent>
            <Title>{title}</Title>
        </HeaderComponent>
    )
}
