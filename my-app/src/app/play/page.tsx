import Link from "next/link";
import HamButton from "../components/hambutton";

export default function PlayPage() {
  const cats = ["diseases", "animals", "countries"];

  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#EEE2DC]">
        
        <div className="flex items-center text-5xl font-bold mb-[3rem] font-serif text-[#123C69]">
            Categories
        </div>
        <div className="min-w-1/2 min-h-1/4 flex items-center justify-around">
          {cats.map((c) => {
            return (
                <Link href={`/play/${c}`}>
              <div className="text-2xl w-[15rem] h-[3.25rem] bg-[#AC3B61] ease-out duration-500 hover:-translate-y-2 outline outline-1 rounded-md flex items-center justify-center text-1xl text-white font-serif gap-[1rem]">
                        <p>{c.charAt(0).toUpperCase() + c.slice(1)}</p>
                    </div>
                </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
