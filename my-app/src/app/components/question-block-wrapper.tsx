"use client"

import HamButton from "./hambutton"
import QuestionBlock from "./question-block"

import { useState } from "react"

type Pair = {
    question: string,
    answer: string
}

function retrieve (n: number) {
    var question = ""
    var answer = ""
    if (typeof window !== "undefined") {
      question = localStorage.getItem(`q${n}`) || ""
      answer = localStorage.getItem(`a${n}`) || ""
    }
    return { question, answer }
}

export default function QuestionBlockWrapper({category, n} : {
    category: string,
    n: number
}) {

    const [amountAnswered, setAmountAnswered] = useState(0)
    const arr : Pair[] = []

    for ( let i: number = 0; i < amountAnswered; i++) {
        arr.push(retrieve(i))
        console.log(arr)
    }

    const wrapperFunc = () => {
        setAmountAnswered(amountAnswered+1)
    }

    return (
        <div>
            <HamButton display={arr}/>
            <QuestionBlock questionAmount={n} item="Pneumonia" wrapperFunc={wrapperFunc}/>
        </div>
    )
}