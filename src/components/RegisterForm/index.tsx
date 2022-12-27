import { Box, Container, FormContainer, Section, Title } from "./styles";
import { schema } from "../../schemas/inputsSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/router";
import { IUserData } from "../../interfaces/IUserData";

export const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  const messageError = (errors: any) => {
    if (!errors) {
      return "";
    }

    if (errors.message?.type === "required") {
      return "This field is required";
    }

    return errors.message.toString();
  };

  const onSubmit = async (data: any) => {
    try {
      const userData: IUserData = {
        username: data.username,
        email: data.email,
        password: data.password,
        avatar: data.avatar,
      };

      await axios.post("/api/users/account/register", userData);
    } catch {
      console.error("nao foi possivel comunicar com a api");
    }
  };

  return (
    <Container>
      <div>
        <Title>Register</Title>
      </div>

      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <Box>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              {...register("username")}
              name="username"
            />
            <p>{messageError(errors.username)}</p>
          </Box>
          <Box>
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="email"
              {...register("email")}
              name="email"
            />
            <p>{messageError(errors.email)}</p>
          </Box>
        </Section>

        <Section>
          <Box>
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              {...register("password")}
              name="password"
            />
            <p>{messageError(errors.password)}</p>
          </Box>
          <Box>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword")}
              name="confirmPassword"
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
              <input type="file" id="file" name="avatar" />
              <span>Chose a file</span>
            </label>
          </div>

          <input type="submit" value="Create Account" id="Create Account" />
        </Section>
      </FormContainer>
    </Container>
  );
};
