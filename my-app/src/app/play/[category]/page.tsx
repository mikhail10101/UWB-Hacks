import { notFound } from "next/navigation"
import Link from "next/link"
import HamButton from "@/app/components/hambutton"

export default function CategoryPage({ params }: {params: {category: string}}) {
    const { category } = params

    var valid = false
    const cats = ["diseases"]
    cats.map((c) => {
        if (c == category)
        valid = true
    })
    if (!valid) notFound()

    const arr = [5, 10, 20, 30]
    
    return (
        <>
        <nav className="h-[4rem] bg-[#EEE2DC] fixed top-0 w-full z-10">
        <div className="absolute left-[48%] top-[1.25rem] font-bold text-2xl text-[#ebaca2]">JAM</div>
        <div className="container mx-auto">
          <HamButton />
            </div>
        </nav>
            <div className="absolute left-[48%] top-[1.25rem] font-bold text-2xl text-[#AC3B61]">JAM</div>
            <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#EEE2DC]">
                <div className="flex items-center text-5xl font-bold font-serif text-[#ce6a6b]">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </div>   
                <div className="flex flex-col">
                    {arr.map((i) => (
                        <div key={i} className="text-2xl w-[15rem] h-[3.25rem] bg-[#ebaca2] hover:bg-[#EEE2DC] outline outline-1 rounded-md flex items-center justify-center text-1xl text-white font-serif gap-[1rem]">
                            <Link href={`/play/${category}/${i}`}>
                                <p className="m-0">{i}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
