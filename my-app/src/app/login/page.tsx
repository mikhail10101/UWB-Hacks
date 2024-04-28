import LoginCard from "../components/login-card"

import { notFound } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/auth-options"

export default async function LoginPage() {
    const session = await getServerSession(authOptions)

    if (session) { notFound() }

    return (
        <div className="h-screen text-[#123C69] flex items-center justify-center bg-[#EDC7B7]">
            <LoginCard />
        </div>
    )
}