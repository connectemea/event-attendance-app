import React from "react"
import { TextInput } from "../components/atoms/Input/TextInput";
import { SelectInput } from "@/components/atoms/Input/SelectInput";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        Welcome to home page
      </h1>
      <TextInput  />
    </main>
  );
}
