import Link from "next/link"

export default function NotFound() {

    return (
        <div className="h-screen w-screen flex flex-col items-center
            justify-center text-[#123C69] bg-[#EEE2DC] gap-2 font-bold">
            <div className="text-3xl flex gap-3 font-serif">
                <p className="text-[#AC3B61]">Error 404</p> <p>Page not found</p>
            </div>
            <p className="text-black text-xl">Try <Link href="/login"><u>logging</u></Link> in?</p>
        </div>
    )
}