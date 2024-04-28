import { notFound } from "next/navigation";
import Link from "next/link";
import HamButton from "@/app/components/hambutton";

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;

  var valid = false;
  const cats = ["diseases", "animals", "countries"];
  cats.map((c) => {
    if (c == category) valid = true;
  });
  if (!valid) notFound();

  const arr = [5, 10, 20, 30];

  return (
    <>
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#EEE2DC]">
          <div className="absolute text-4xl mt-[-30rem] text-center font-bold font-serif text-[#AC3B61]">
            <p>{category.charAt(0).toUpperCase() + category.slice(1)}</p>
          </div>
          <div className="text-5xl text-center font-bold font-serif text-[#123C69] mb-[3rem]">
            <p>Number of Questions</p>
          </div>

        <div className="minw-1/2 min-h-1/4 flex items-center justify-around flex-wrap">
          {arr.map((i) => (
            <Link href={`/play/${category}/${i}`} key={i}>
              <div className="text-2xl w-[15rem] h-[3.25rem] bg-[#AC3B61] ease-out duration-300 hover:-translate-y-6 outline outline-1 rounded-md flex items-center justify-center text-1xl text-white font-serif gap-[1rem]">
                <p className="m-0">{i}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
