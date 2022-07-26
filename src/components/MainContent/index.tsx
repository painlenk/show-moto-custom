import { Card } from "../Card"
import { Box, Container, GradientContainer, Main, Title } from "./styles"

export const MainContent = () => {
    return (

        <Container  >
            <GradientContainer>
                <Main>
                    <Title>
                        <span>Harley Davidson</span>
                        <p>announces new version of delux 2023</p>
                    </Title>
                </Main>
                <Box>
                    <Card />
                    <Card />
                    <Card />
                </Box>
            </GradientContainer>
        </Container>

    )
}