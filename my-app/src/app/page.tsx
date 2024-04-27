import Link from "next/link";
import HamButton from "./components/hambutton";

export default function main() {
  return (
    <>
      <div className="w-screenç h-screen flex flex-col items-center justify-center bg-slate-700">
        <img src="/hanni.png" alt="Logo" className="w-[15rem] h-auto" />
        <div className="w-[40rem] gap-[3rem]">
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </h1>
        </div>

        <div className="w-[10rem] h-[10rem] flex flex-col items-center justify-center gap-[2rem]">
          <Link href="/play">
            <div className="w-[12rem] h-[3rem] bg-slate-800 hover:bg-slate-900 rounded-md rounded-tr-lg flex items-center justify-center text-1xl text-white">Play</div>
          </Link>
          <Link href="/login">
            <div className="bg-inherit rounded-md flex items-center justify-center underline underline-offset-1 text-white">RULES</div>
          </Link>
        </div>
      </div>

    </>
  );
}

