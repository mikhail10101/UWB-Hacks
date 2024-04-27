import Link from "next/link"

export default function PlayPage() {
    const cats = ["diseases"]

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <p>Cateogires</p>
            <div className="flex flex-col">
                {
                    cats.map((c) => {
                        return (
                            <div key={c}>
                                <Link href={`/play/${c}`}>
                                    <p>{c.charAt(0).toUpperCase() + c.slice(1)}</p>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}