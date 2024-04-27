import { askBot } from "../data";
import Link from "next/link";

export default async function main() {
  const res = await askBot("Reply with emotions", "How are you feeling?");
  

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-slate-700">

        <img src="/hanni.png" alt="Logo" className="w-[15rem] h-auto"></img>
        <div><h1>Guess what I am</h1></div>
        <Link href="/login">
          <div className="w-[12rem] h-[3rem] bg-black rounded-tl-lg rounded-tr-lg flex items-center justify-center text-1xl mt-8">Play</div>
        </Link>
        <Link href="/login">
          <div className="bg-inherit rounded-md flex items-center justify-center underline underline-offset-1 mt-6">LOGIN</div>
        </Link>
        <Link href="/login">
          <div className="bg-inherit rounded-md flex items-center justify-center underline underline-offset-1 mt-6">RULES</div>
        </Link>
    </div>
  )
}
