import React from "react"
import { TextInput } from "../components/atoms/Input/TextInput";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        Component List
      </h1>
      <TextInput  />
    </main>
  );
}
