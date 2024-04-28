import SendEmailForm from "@/app/components/send-email-form"

import { notFound } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options"

export default async function LoginEmailPage() {
    const session = await getServerSession(authOptions)

    if (session) { notFound() }

    return (
        <div className="bg-[#EDC7B7] text-[#123C69] h-screen w-screen flex flex-col items-center justify-center">  
            <SendEmailForm />
        </div>
    )
}