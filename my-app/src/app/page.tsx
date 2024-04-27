import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/auth-options"

export default async function main() {
  const session = await getServerSession(authOptions)
  
  return (
    <div className="w-screen h-screen flex items-center justify-center p-10">
        Home
        {
          session ? <p>In session</p> : <p>No session</p>
        }
    </div>
  )
}
