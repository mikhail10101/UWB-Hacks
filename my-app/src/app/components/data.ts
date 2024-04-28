import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/auth-options"
import { prisma } from "../prisma"

export async function getCurrentUser() {
    const session = await getServerSession(authOptions)
    const user_email = session?.user?.email

    const current_user = await prisma.user.findFirst({
        where: {
            email: {
                equals: user_email
            }
        }
    })

    return current_user
}