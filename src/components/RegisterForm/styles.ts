import styled from "styled-components";


export const Container = styled.div`
    background-color: rgba(${props => props.theme.colors.form});
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* max-width: 46.875em;
    width: 46.875em; */
    width: 50%;
    margin: 80px auto;
    margin-bottom: 0px;
    border-radius: ${props => props.theme.radius.great};

`

export const Title = styled.h1`
    margin: 25px auto;
    padding: 0;
    font-size: ${props => props.theme.fontSize.title};
    font-weight: ${props => props.theme.fontWeight.heavy};
    color: ${props => props.theme.colors.text.primary};

`

export const FormContainer = styled.form`
    width: 90%;
    
    & div:nth-child(3) {
        flex-direction: column;
        margin-top: 35px ;
        
        div {
            display: flex;
            flex-direction: column;
            margin-bottom: 30px;
            
            width: 40%;
            & label {
                margin-bottom: 0.25em;
                font-size: ${props => props.theme.fontSize.text};
                font-weight: ${props => props.theme.fontWeight.bold};
                color: ${props => props.theme.colors.text.white.light};

                & span {
                    font-weight: ${props => props.theme.fontWeight.medium};
                    font-size: ${props => props.theme.fontSize.subText};
                    
                }
            }

            & button {
                height: 35px;
                font-weight: ${props => props.theme.fontWeight.bold};
                font-size: ${props => props.theme.fontSize.text};
                color: ${props => props.theme.colors.text.gray.medium};
                border: 1px solid ${props => props.theme.colors.text.gray.bold};
                border-radius: ${props => props.theme.radius.small};
                cursor: pointer;
                outline: none;
                text-align: center;

                &:hover, &:focus {
                    
                    cursor: pointer;
                    outline: none;
                    border: 1px solid ${props => props.theme.colors.text.gray.bold};
                }

            }
                       
        }

        & input[type="submit"] {
            width: 40%;
            height: 45px;
            font-weight: ${props => props.theme.fontWeight.heavy};
            font-size: ${props => props.theme.fontSize.text};
            border-radius: ${props => props.theme.radius.small};
            background-color: ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.text.gray.bold};
            border: none;
            cursor: pointer;
            outline: none;

             &:hover, &:focus {
                
                cursor: pointer;
                outline: none;
                border: none;
             }      
        }
    }
`

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: 45%;
    

    & label {
        margin-bottom: 0.25em;
        font-size: ${props => props.theme.fontSize.text};
        font-weight: ${props => props.theme.fontWeight.heavy};
        color: ${props => props.theme.colors.text.primary};
    }

    & input {
        height: 35px;
        border-radius: ${props => props.theme.radius.small};
        border: 1px solid ${props => props.theme.colors.text.gray.bold};
        font-size: ${props => props.theme.fontSize.text};
        
        width: 100%;
        padding: 5px;
        background-color : #d1d1d1; 
        
        font-weight: ${props => props.theme.fontWeight.semiBold};
        
    }

`