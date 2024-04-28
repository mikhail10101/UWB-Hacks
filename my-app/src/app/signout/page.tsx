import SignoutCard from "../components/signout-card"

import { notFound } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/auth-options"

export default async function SignoutPage() {
    const session = await getServerSession(authOptions)

    if (!session) { notFound() }

    return (
        <div className="w-screen h-screen text-[#123C69] flex items-center justify-center bg-[#EDC7B7]">
            <SignoutCard />
        </div>
    )
}