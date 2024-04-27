import Link from "next/link"

export default function CategoryPage({ params }: {params: {category: string}}) {
    const { category } = params
    const arr = [5, 10, 20, 40]
    
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