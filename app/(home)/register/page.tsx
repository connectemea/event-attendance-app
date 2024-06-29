import RegisterForm from "@/components/organisms/Forms/RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Register() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/dashboard");
  }
  return (
    <main className="grid place-items-center h-screen bg-white ">
      <div className="flex items-center justify-center gap-4 flex-col">
        <h1 className="text-black font-semibold">Welcome to home page</h1>
        <RegisterForm />
      </div>
    </main>
  );
}
