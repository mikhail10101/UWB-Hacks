"use client"

import QuestionBlock from "./question-block"

export default function QuestionBlockWrapper({category, n} : {
    category: string,
    n: number
}) {
    return (
        <div>
            <QuestionBlock questionAmount={n} item="Pneumonia"/>
        </div>
    )
}