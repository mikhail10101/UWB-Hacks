"use client"

import HamButton from "./hambutton"
import QuestionBlock from "./question-block"

import { useEffect, useState } from "react"

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

    const chooseTopic = async () => {
        const res = await fetch('/api/bard/choose', {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text: category
            })
        })

        const { answer } = await res.json()

        setTopic(answer)
    }

    const wrapperFunc = () => {
        setAmountAnswered(amountAnswered+1)
    }

    const wrapperReset = async () => {
        setAmountAnswered(0)
        chooseTopic()
    }

    const [amountAnswered, setAmountAnswered] = useState(0)
    const [topic, setTopic] = useState("")
    const arr : Pair[] = []

    useEffect(() => {
        const run = async () => {
            await chooseTopic()
        }
        run()
    }, [])

    for ( let i: number = 0; i < amountAnswered; i++) {
        arr.push(retrieve(i))
    }

    return (
        <div>
            <HamButton display={arr}/>
            <QuestionBlock questionAmount={n} item={topic} wrapperFunc={wrapperFunc} wrapperReset={wrapperReset}/>
        </div>
    )
}