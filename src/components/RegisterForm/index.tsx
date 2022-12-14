import { Box, Container, FormContainer, Section, Title } from "./styles";
import { schema } from "../../schemas/inputsSchema";
import { FieldError, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => console.log(data);

  const usernameMessageError = errors.username?.message?.toString();
  const messageError = (errors: any) => {
    console.log(errors?.type);
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

      <FormContainer action="#" onSubmit={handleSubmit(onSubmit)}>
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
              {...register("password")}
            />
            <p>{messageError(errors.password)}</p>
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
