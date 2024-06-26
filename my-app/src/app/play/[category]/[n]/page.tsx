import QuestionBlockWrapper from '@/app/components/question-block-wrapper';
import { notFound } from 'next/navigation'

import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options';

export default async function NumberedPlayPage({ params }: {params: {category: string, n : string}}) {
    const session = await getServerSession(authOptions)
    if (!session) { notFound() }
    
    const nums = [5,10,20,30]
    const cats = ["diseases", "animals", "countries"]
    const q = parseInt(params.n)

    if (isNaN(q))
        notFound()
    let valid = false;
    nums.map((i) => {
        if (q == i) valid = true
    })
    if (!valid) notFound()

    valid = false
    cats.map((c) => {
        if (c == params.category) valid = true
    })
    if (!valid) notFound()
    
    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className="absolute top-[1rem] left-1/4 z-50 text-[#123C69] font-bold text-2xl">{q} Qs</div>
            <div className="absolute top-[1rem] right-1/4 z-50 text-[#123C69] font-bold text-2xl">
                {params.category.charAt(0).toUpperCase() + params.category.slice(1)}
            </div>
            <QuestionBlockWrapper category={params.category} n={q} />
        </div>
    )
}