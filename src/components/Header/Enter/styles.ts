import styled from "styled-components";

export const Container = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;

    li:first-child{
        margin-right: 50px; 
    }

    a {
        text-decoration: none;
        font-size: ${props => props.theme.fontSize.text};
        color: ${props => props.theme.colors.text.primary};
        font-weight: ${props => props.theme.fontWeight.bold}
    }
`