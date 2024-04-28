import Link from "next/link";
import HamButton from "./components/hambutton";

export default function main() {
  return (
    <>
      <nav className="flex items-center justify-end">
        <a
          href="/login"
          className="absolute font-medium top-[.1rem] right-[1.5rem] bg-inherit rounded-md flex items-center justify-center hover:underline hover:underline-offset-1 mt-[1.25rem] text-[#AC3B61] z-50"
        >
          Login
        </a>
      </nav>

      <Link href="/rules">
        <p className="absolute font-medium top-[.1rem] right-[5.5rem] bg-inherit rounded-md flex items-center justify-center hover:underline hover:underline-offset-1 mt-[1.25rem] text-[#AC3B61] z-50">
          Rules
        </p>
      </Link>
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#EEE2DC]">
        <img src="/JamJar.png" alt="Logo" className="w-[15rem] h-auto rounded-full" />


        <div className="w-[60rem] mt-[1rem]  flex flex-row items-center justify-around">

            <div className="w-[20rem] flex items-center justify-center">
              <p className="text-5xl text-center font-serif font-bold text-[#123C69]">Ask me questions</p>
            </div>

            <div className="w-[20rem] h-[10rem] flex flex-col items-center justify-center">
              <Link href="/play" className="transition duration-500 hover:scale-[1.05]">
                <div className="w-[12rem] h-[3rem] bg-[#AC3B61] hover:opacity-90 rounded-3xl flex items-center justify-center text-1xl text-white">
                  <p className="font-black text-xl text-center">Play</p>
                </div>
              </Link>
            </div>

            <div className="w-[20rem] flex items-center justify-center">
              <p className="text-5xl text-center font-serif font-bold text-[#123C69]">
                I'll answer YES or NO
              </p>
            </div>

        </div>
      </div>
    </>
  );
}
