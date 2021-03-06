
import { Box, Container, FormContainer, Section, Title } from "./styles"

export const RegisterForm = () => {

    return (
        <Container>
            <div><Title>Register</Title></div>

            <FormContainer action="#">
                <Section>
                    <Box>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </Box>
                    <Box>
                        <label htmlFor="email">email</label>
                        <input type="email" id="email" />
                    </Box>

                </Section>

                <Section>
                    <Box>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" />
                    </Box>
                    <Box>
                        <label htmlFor="password">password</label>
                        <input type="password" id="password" />
                    </Box>

                </Section>
                <Section>
                    <div>
                        <label htmlFor="file">Avatar <span>(Upload image)</span></label>
                        <button id='file' >Chose a file</button>
                    </div>

                    <input type="submit" value="Create Account" id="Create Account" />
                </Section>
            </FormContainer>
        </Container>
    )
}