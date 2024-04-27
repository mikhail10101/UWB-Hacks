import { askBot } from "../data";
import Link from "next/link";
export default async function main() {
  const res = await askBot("Reply with emotions", "How are you feeling?");
  

  return (
    <div className="w-screen h-screen flex items-center justify-center p-10">
      <Link href = "/login">
        Click to Login
      </Link>
    </div>
  )
}
