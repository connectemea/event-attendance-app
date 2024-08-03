"use client";
import { AdminLoginForm } from "@/components/organisms/Forms/AdminLoginForm";
import styled from "@emotion/styled";

const LoginContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh"
}));

export const AdminLoginPage = () => {
  return (
    <LoginContainer>
      <AdminLoginForm />
    </LoginContainer>
  );
};
