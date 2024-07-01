"use client";
import React, { useEffect, useState } from "react";
import { TextInput } from "@/components/atoms/Input/TextInput";
import SubmitButton from "@/components/atoms/Button/SubmitButton";
import ErrorMessage from "@/components/atoms/ErrorMessage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

interface Club {
  id: string;
  club_name: string;
}
const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [NodalOfficer, setNodalOfficer] = useState("");
  const [selectedClub, setSelectedClub] = useState("");
  const [clubs, setClubs] = useState<Club[]>([]);
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

  const handleNodalOfficerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNodalOfficer(e.target.value);
  };

  const handleClubChange = (e: SelectChangeEvent) => {
    setSelectedClub(e.target.value as string);
  };

  const options = clubs.map((club) => ({
    value: club.id,
    label: club.club_name,
  }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password || !name) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          password,
          club_id: selectedClub,
          nodal_officer: NodalOfficer,
        }),
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
        router.push("/login");
      } else {
        console.log("User registration failed!");
      }
    } catch (error) {
      console.log("An error occurred while registering the user");
    }
  };

  useEffect(() => {
    fetchClubs();
  }, []);

  const fetchClubs = async () => {
    try {
      const res = await fetch("/api/club");
      if (res.ok) {
        const data = await res.json();
        setClubs(data.clubs);
        console.log(data);
      }
    } catch (error) {
      console.log(" error  fetching clubs", error);
    }
  };

  return (
    <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400 min-w-[350px]">
      <h1 className="text-xl font-bold my-4 text-black">Enter the details</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextInput
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={handleNameChange}
        />
        <TextInput
          type="text"
          placeholder="Nodal Officer Name"
          value={NodalOfficer}
          onChange={handleNodalOfficerChange}
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
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={selectedClub}
          placeholder="Select Club"
          label="Role"
          onChange={handleClubChange}
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
