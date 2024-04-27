import { notFound } from "next/navigation"
import Link from "next/link"

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
        <div className="h-screen w-screen flex flex-col items-center justify-center">
            {category.charAt(0).toUpperCase() + category.slice(1)}
            <div className="flex flex-col">

            {
                arr.map((i) => {
                    return (
                        <div key={i}>
                            <Link href={`/play/${category}/${i}`}>
                                <p>{i}</p>
                            </Link>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}