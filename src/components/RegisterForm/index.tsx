import { Box, Container, FormContainer, Section, Title } from "./styles";
import { schema } from "../../schemas/inputsSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const RegisterForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const messageError = (errors: any) => {
    if (!errors) {
      return "";
    }

    if (errors.message?.type === "required") {
      return "This field is required";
    }

    return errors.message.toString();
  };

  return (
    <Container>
      <div>
        <Title>Register</Title>
      </div>

      <FormContainer action="#">
        <Section>
          <Box>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" {...register("username")} />
            <p>{messageError(errors.username)}</p>
          </Box>
          <Box>
            <label htmlFor="email">email</label>
            <input type="email" id="email" {...register("email")} />
            <p>{messageError(errors.email)}</p>
          </Box>
        </Section>

        <Section>
          <Box>
            <label htmlFor="password">password</label>
            <input type="password" id="password" {...register("password")} />
            <p>{messageError(errors.password)}</p>
          </Box>
          <Box>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword")}
            />
            <p>{messageError(errors.confirmPassword)}</p>
          </Box>
        </Section>
        <Section>
          <div>
            <div>
              <strong>Avatar </strong>
              (Upload image)
            </div>
            <label htmlFor="file">
              <input type="file" id="file" />
              <span>Chose a file</span>
            </label>
          </div>

          <input type="submit" value="Create Account" id="Create Account" />
        </Section>
      </FormContainer>
    </Container>
  );
};
