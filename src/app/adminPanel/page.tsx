"use client";
import LogOutButton from "@/components/atoms/Button/LogOut";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="grid place-items-center h-screen bg-white ">
      <div className="flex items-center justify-center gap-4 flex-col">
        <h1 className="text-black font-semibold">Welcome to the admin panel</h1>
        <div className="flex items-start justify-center gap-4 flex-col shadow-lg p-5 rounded-lg border-t-4 border-green-400">
          <div>
            Name :
            <span className="text-black font-semibold">
              {session?.user?.name}
            </span>
          </div>
          <div>
            Email :
            <span className="text-black font-semibold">
              {session?.user?.email}{" "}
            </span>
          </div>
          <div>
            Role :{" "}
            <span className="text-black font-semibold">
              {session?.user?.role}
            </span>
          </div>
          <LogOutButton onClick={() => signOut()}>Logout</LogOutButton>
        </div>
      </div>
    </main>
  );
}
