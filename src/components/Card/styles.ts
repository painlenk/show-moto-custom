import styled from "styled-components";


export const Container = styled.div`
    width: 250px;
    background-color: rgba(${props => props.theme.colors.cards});
    border-radius: ${props => props.theme.radius.normal}
`
export const Content = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 14px;
    p{
        color: ${props => props.theme.colors.text.gray.light}
    }

`

export const Title = styled.h3`
    color: ${props => props.theme.colors.text.primary};
    font-size: ${props => props.theme.fontSize.subText};
`