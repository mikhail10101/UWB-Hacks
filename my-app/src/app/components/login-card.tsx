'use client'

import Link from 'next/link'
import { useSession, signIn } from 'next-auth/react'

export default function LoginCard() {
    const { data, status } = useSession()

    return (
        <div className='flex flex-col rounded-3xl items-center w-[20rem] h-[20rem] gap-10'>
            <div className='flex flex-col items-center gap-2'>
                <p className='text-6xl font-black'>
                    Log in
                </p>
                <p className='font-medium text-xs w-[16rem] pl-2'>
                    Logging into JAM allows your to track your past games
                </p>
            </div>    
            <div className='flex flex-col gap-3'>
                <Link className="flex flex-row items-center gap-2 py-3 w-[15rem] justify-center outline rounded-3xl hover:opacity-75 hover:[#BAB2B5]"
                    href="/login/email">
                    <div className='w-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>

                    </div>
                    <p className='font-semibold'>Sign in with Email</p>
                </Link>
                <button className="flex flex-row items-center gap-2 py-3 w-[15rem] justify-center outline rounded-3xl hover:opacity-75 hover:text-[#BAB2B5]"
                    onClick={() => signIn('google', { callbackUrl: "/" })}>
                    <div className='w-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                            <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
                        </svg>
                    </div>
                    <p className='font-semibold'>Sign in with Google</p>
                </button>
                <button className="flex flex-row items-center gap-2 py-3 w-[15rem] justify-center outline rounded-3xl hover:opacity-75 hover:[#BAB2B5]"
                    onClick={() => signIn('github', { callbackUrl: "/" })}>
                    <div className='w-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                            <path fill="currentColor" d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                        </svg>
                    </div>
                    <p className='font-semibold'>Sign in with GitHub</p>
                </button>
            </div>
            <Link href="/">
                <p className='text-[#AC3B61] font-semibold py-5 hover:underline'>Back</p>
            </Link>
        </div>
    )
}