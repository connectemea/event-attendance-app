"use client";
import { TextInput } from "@/components/atoms/Input/TextInput";
import { useAdminLoginForm } from "./useAdminLoginForm";
import { Button, styled } from "@mui/material";

const LoginForm = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: theme.spacing(2),
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

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  alignSelf: "flex-end"
}));

export const AdminLoginForm = () => {
  const { actions } = useAdminLoginForm();
  return (
      <LoginForm onSubmit={actions.handleSubmitClick}>
        <LoginTitle>Login</LoginTitle>
        <TextInput label="Email" fullWidth {...actions.register("email")} />
        <TextInput
          label="Password"
          fullWidth
          {...actions.register("password")}
        />
        <SubmitButton type="submit" variant="contained">
          Login
        </SubmitButton>
      </LoginForm>
  );
};
