import Link from "next/link";
import HamButton from "../components/hambutton";

export default function PlayPage() {
  const cats = ["diseases", "math", "english"];

  return (
    <>
      <nav className="h-[4rem] bg-[#EEE2DC] fixed top-0 w-full z-10">
        <div className="absolute left-[48%] top-[1.25rem] font-bold text-2xl text-[#ebaca2]">JAM</div>
      </nav>
      <div className="w-screen h-screen flex flex-col items-center justify-around bg-[#EEE2DC]">
        <div className="flex items-center text-5xl font-bold font-serif mb-[20rem] text-[#ce6a6b]">
            Categories
        </div>
        <div className="absolute">
          {cats.map((c) => {
            return (
              <div key={c} className="text-2xl w-[15rem] h-[3.25rem] bg-[#ebaca2] hover:bg-[#EEE2DC] outline outline-1 rounded-md flex items-center justify-center text-1xl text-white font-serif gap-[1rem]">
                <Link href={`/play/${c}`}>
                  <p>{c.charAt(0).toUpperCase() + c.slice(1)}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
