import { NextPage } from "next";
import { Container } from "../../styles/pagesStyles/register";
import { RegisterForm } from "../components/RegisterForm";

const Register: NextPage = () => {
    return (
        <Container>
            <RegisterForm />
        </Container>
    )
}

export default Register