"use client";
import { TextInput } from "@/components/atoms/Input/TextInput";
import { useAdminLoginForm } from "./useAdminLoginForm";
import { Button, styled } from "@mui/material";

const LoginContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh"
}));

const LoginForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  maxWidth: "400px",
  padding: theme.spacing(4)
}));

const LoginTitle = styled("h1")(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginBottom: theme.spacing(2)
}));

export const LoginAdminTemplate = () => {
  const { actions } = useAdminLoginForm();
  return (
    <LoginContainer>
      <LoginForm onSubmit={actions.handleSubmitClick}>
        <LoginTitle>Login</LoginTitle>
        <TextInput label="outlined123" {...actions.register("email")} />
        <TextInput label="okk done" {...actions.register("password")} />
        <Button type="submit" variant="contained" className="w-full">
          Login
        </Button>
      </LoginForm>
    </LoginContainer>
  );
};
