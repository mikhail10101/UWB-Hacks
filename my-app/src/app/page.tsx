import { askBot } from "./data";

export default async function main() {
  const res = await askBot("Reply with emotions", "How are you feeling?");

  return (
    <div>
        {res}
    </div>
  )
}
