"use client";
import React, { useState } from "react";
import { TextInput } from "@/components/atoms/Input/TextInput";
import SubmitButton from "@/components/atoms/Button/SubmitButton";
import ErrorMessage from "@/components/atoms/ErrorMessage";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SelectInput } from "@/components/atoms/Input/SelectInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const AdminLoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("admin");
  const [error, setError] = useState("");
  const router = useRouter();

  // Handle input changes

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e: SelectChangeEvent) => {
    setSelectedRole(e.target.value as string);
  };

  const options = [
    { value: "admin", label: "Admin" },
    { value: "moderator", label: "Moderator" },
  ];

  // handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setError("All fields are required");
    }

    try {
      const res = await signIn("credentials", {
        email,
        password,
        role: selectedRole,
        redirect: false,
      });
      if (res?.error) {
        setError("Invalid credentials");
        return;
      }
      router.push("/adminPanel");
    } catch (error) {
      console.error(error);
    }
  };

  // Fill the form for testing
  const handleClick = () => {
    setEmail("admin@gmail.com");
    setPassword("password");
    setSelectedRole("admin");
  };

  return (
    <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
      <h1 className="text-xl font-bold my-4 text-black text-center">
        Admin Login
      </h1>
      <div className="flex items-center p-2">
        <button
          onClick={() => handleClick()}
          className="bg-blue-500 p-2 rounded-md font-bold text-white mx-auto "
        >
          Click to fill
        </button>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextInput
          type="email"
          label="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <TextInput
          type="password"
          label="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        {/* onChange issue facing */}
        {/* <SelectInput
          label="Role"
          value={selectedRole}
          option={options}
          onChange={handleRoleChange}
        /> */}

        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={selectedRole}
          label="Role"
          onChange={handleRoleChange}
        >
          {options.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
        <SubmitButton
          onClick={() => console.log("Button clicked")}
          disabled={false}
        >
          Login
        </SubmitButton>
        {error && <ErrorMessage message={error} />}
      </form>
    </div>
  );
};

export default AdminLoginForm;
