import { askBot } from "./data";

export default async function main() {
  const res = await askBot();

  return (
    <div>
        Hi!
        {res}
    </div>
  )
}
