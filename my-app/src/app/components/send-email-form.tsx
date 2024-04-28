'use client'

import { signIn } from 'next-auth/react'
import Link from 'next/link'

export default function SendEmailForm() {
    function handleSubmit (formData: FormData) {
        const e = formData.get("email")
        signIn("email", {email : e, callbackUrl: "/" })
    }

    return (
        <div className='w-[20rem] h-[20rem] gap-10 flex-col flex items-center'>
            <div className='flex flex-col items-center gap-2'>
                <p className='text-6xl font-black'>
                    Log in
                </p>
                <p className='font-medium text-xs w-[17rem] pl-2'>
                    Logging in to JAM lets you see your past games
                </p>
            </div> 
            <form className="pl-5 flex flex-col" action={handleSubmit}>
                <div className='flex flex-row gap-5'>
                    <input className="text-black w-[20rem] py-2 rounded-3xl outline focus:outline-2 text-center" type="email" name="email" autoComplete='off' placeholder='user@email.com'/>
                    <button type="submit">
                        <p className='font-bold'>Send</p>
                    </button>
                </div>
            </form>
            <Link href="/login">
                <p className='text-[#AC3B61] font-semibold py-5 hover:underline'>Back</p>
            </Link>
        </div>
    )
}