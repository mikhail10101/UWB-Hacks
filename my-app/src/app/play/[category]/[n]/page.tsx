import QuestionBlockWrapper from '@/app/components/question-block-wrapper';
import { notFound } from 'next/navigation'

export default function NumberedPlayPage({ params }: {params: {category: string, n : string}}) {
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
            <QuestionBlockWrapper category={params.category} n={q} />
        </div>
    )
}