import React from "react";
import AdminLoginForm from "@/components/organisms/Forms/AdminLoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../../api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }

  return (
    <main className="flex min-h-[90vh] flex-col items-center justify-center p-24">
        <h1 className="text-black font-semibold">Welcome to home page</h1>
        <AdminLoginForm />
    </main>
  );
}
