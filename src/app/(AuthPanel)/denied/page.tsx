import Link from "next/link";

export default function Denied() {
  return (
    <div className="border font-bold mx-auto flex flex-col items-center justify-center rounded-md p-4 m-4 gap-2 max-w-lg">
      <h1>Access </h1>
      <p>
        You are logged in but you don't have the required permissions to access
        this page.
      </p>
      <p className="flex gap-4">
        <Link href="/login" className="text-blue-500">
          Sign in
        </Link>
        <Link href="/" className="text-blue-500">
          Return home
        </Link>
      </p>
    </div>
  );
}
