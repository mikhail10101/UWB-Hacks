'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react"

export default function SignoutCard() {
    const router = useRouter()

    const handleClick = () => {
        signOut({ callbackUrl: '/' });
    }

    return (
        <div className='flex flex-col rounded-3xl items-center w-[20rem] h-[10rem] gap-10'>
            <div className='flex flex-col items-center gap-2'>
                <p className='text-6xl font-black'>
                    Sign out
                </p>
                <p className='font-medium text-xs pl-2'>
                    Are you sure you want to leave?
                </p>
            </div>    
            <div className='flex flex-col items-center gap-2'>
                <button onClick={handleClick}>
                    <p className="font-bold hover:underline">Yes</p>
                </button>
                <Link href="/">
                    <p className='text-blue-600 font-semibold hover:underline'>Back</p>
                </Link>
            </div>
        </div>
    )
}