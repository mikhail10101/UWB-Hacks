import Link from "next/link";
import HamButton from "./components/hambutton";

export default function main() {
  return (
    <>
      <nav className="flex items-center justify-end">
        <a
          href="/login"
          className="absolute top-[.1rem] right-[1.5rem] bg-inherit rounded-md flex items-center justify-center underline underline-offset-1 mt-[1.25rem] text-[#AC3B61] z-50"
        >
          Login
        </a>
      </nav>
      <Link href="/login">
        <p className="absolute top-[.1rem] right-[5.5rem] bg-inherit rounded-md flex items-center justify-center underline underline-offset-1 mt-[1.25rem] text-[#AC3B61] z-50">
          Rules
        </p>
      </Link>
      <div className="w-screenç h-screen flex flex-col items-center justify-center bg-[#EEE2DC]">
        <img src="/hanni.png" alt="Logo" className="w-[15rem] h-auto" />
        <div className="w-[40rem] mt-[1rem] flex flex-row items-center justify-center mr-[4rem]">
          <div className="flex items-center justify-center gap-[6rem]">
            <div>
              <p className="text-5xl font-serif font-bold">Ask me questions</p>
            </div>
            <div className="w-[10rem] h-[10rem] flex flex-col items-center justify-center">
              <Link href="/play">
                <div className="w-[12rem] h-[3rem] bg-[#AC3B61] hover:opacity-90 rounded-md rounded-tr-lg flex items-center justify-center text-1xl text-white">
                  Play
                </div>
              </Link>
            </div>
            <div>
              <p className="text-5xl font-serif font-bold">
                I'll answer YES or NO
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
