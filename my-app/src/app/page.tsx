import Link from "next/link";
import HamButton from "./components/hambutton";

export default function main() {
  return (
    <>
      <nav className="h-[4rem] bg-slate-400 fixed top-0 w-full z-10">
        <div className="container mx-auto">
          <HamButton />
          <nav className="flex items-center justify-end">
            <a href="/login" className="absolute top-[.1rem] right-[1.5rem] bg-inherit rounded-md flex items-center justify-center underline underline-offset-1 mt-[1.25rem] text-white">Login</a>
          </nav>
        </div>
      </nav>

      <div className="w-screen h-screen flex flex-col items-center justify-center bg-slate-700">
        <img src="/hanni.png" alt="Logo" className="w-[15rem] h-auto" />
        <div className="w-[40rem]">
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </h1>
        </div>

        <div className="w-[10rem] h-[10rem] flex flex-col items-center justify-center content-between">
          <Link href="/login">
            <div className="w-[12rem] h-[3rem] bg-black rounded-tl-lg rounded-tr-lg flex items-center justify-center text-1xl text-white">Play</div>
          </Link>
          <Link href="/login">
            <div className="bg-inherit rounded-md flex items-center justify-center underline underline-offset-1 text-white">RULES</div>
          </Link>
        </div>
      </div>
    </>
  );
}
