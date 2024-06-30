import React from "react";
import { TextInput } from "@/components/atoms/Input/TextInput";
import { SelectInput } from "@/components/atoms/Input/SelectInput";
import LoginForm from "@/components/organisms/Forms/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center justify-center gap-4 flex-col">
        <h1 className="text-black font-semibold">Welcome to home page</h1>
        <LoginForm />
      </div>
      <h1>Component List</h1>
      <div className="flex flex-col gap-4">
        <TextInput label="label" />
        <SelectInput
          label="Select"
          option={[
            { label: "test", value: "test" },
            { label: "test2", value: "test2" }
          ]}
        />
      </div>
    </main>
  );
}
