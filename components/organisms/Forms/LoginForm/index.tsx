"use client";
import React, { useState } from "react";
import TextInput from "@/components/atoms/Input/TextInput";
import SubmitButton from "@/components/atoms/Button/SubmitButton";
import ErrorMessage from "@/components/atoms/ErrorMessage";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setError("All fields are required");
    }

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res?.error) {
        setError("Invalid credentials");
        return;
      }
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
      <h1 className="text-xl font-bold my-4 text-black">Enter the details</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <TextInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <SubmitButton
          onClick={() => console.log("Button clicked")}
          disabled={false}
        >
          Login
        </SubmitButton>
        {error && <ErrorMessage message={error} />}

        <Link className="text-sm mt-3 text-right" href="/register">
          Don't have an account?<span className="underline">Register</span>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
