"use client";
import { TextInput } from "@/components/atoms/Input/TextInput";
import { useAdminLoginForm } from "./useAdminLoginForm";
import { Button } from "@mui/material";

export const LoginAdminTemplate = () => {
  const { actions } = useAdminLoginForm();
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <form onSubmit={actions.handleSubmitClick} className="flex items-center justify-center gap-4 flex-col">
        <TextInput label="outlined123" {...actions.register("email")} />
        <TextInput label="okk done" {...actions.register("password")} />
        <Button type="submit" variant="contained" className="w-full">Login</Button>
      </form>
    </div>
  );
};
