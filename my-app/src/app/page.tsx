import { askBot } from "../data";

export default async function main() {
  const res = await askBot("Reply with emotions", "How are you feeling?");

  return (
    <div className="w-screen h-screen flex items-center justify-center p-10">
        {res}
    </div>
  )
}
