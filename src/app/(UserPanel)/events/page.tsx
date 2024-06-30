import LogOutButton from "@/components/atoms/Button/LogOut";

export default function Home() {
  return (
    <main className="grid place-items-center h-screen bg-white ">
      <div className="flex items-center justify-center gap-4 flex-col">
        <h1 className="text-black font-semibold">
          Welcome to user panel event page
        </h1>
        <div className="flex items-start justify-center gap-4 flex-col shadow-lg p-5 rounded-lg border-t-4 border-green-400">
          <div className="py-4 px-2 font-bold text-xl">Events listing page</div>
        </div>
      </div>
    </main>
  );
}
