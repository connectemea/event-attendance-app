"use client";
import React, { useState } from "react";
import TextInput from "@/components/atoms/Input/TextInput";
import SubmitButton from "@/components/atoms/Button/SubmitButton";
import ErrorMessage from "@/components/atoms/ErrorMessage";
import Link from "next/link";
import { set } from "mongoose";
import { useRouter } from "next/navigation";

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password || !name) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        setError("");
        const form = e.target as HTMLFormElement;
        form.reset();
        // show toast from material ui ...(pending)
        const data = await res.json();
        console.log(data);

        // Redirect to the login page
        router.push("/");
      } else {
        console.log("User registration failed!");
      }
    } catch (error) {
      console.log("An error occurred while registering the user");
    }
  };

  return (
    <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
      <h1 className="text-xl font-bold my-4 text-black">Enter the details</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextInput
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={handleNameChange}
        />
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
          Register
        </SubmitButton>
        {error && <ErrorMessage message={error} />}

        <Link className="text-sm mt-3 text-right" href="/">
          Already have an account?<span className="underline">Login</span>
        </Link>
      </form>
    </div>
  );
};

export default RegisterForm;
