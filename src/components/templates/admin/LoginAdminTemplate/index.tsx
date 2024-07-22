"use client";
import { TextInput } from "@/components/atoms/Input/TextInput";
import { useAdminLoginForm } from "./useAdminLoginForm";
import { Button } from "@mui/material";

export const LoginAdminTemplate = () => {
  const { actions } = useAdminLoginForm();
  return (
    <div>
      <form onSubmit={actions.handleSubmitClick}>
        <TextInput {...actions.register("email")} />
        <TextInput {...actions.register("password")} />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};
