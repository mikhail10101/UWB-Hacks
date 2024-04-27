"use client"

import { ChangeEvent, useState } from "react"

export default function QuestionBlock({questionAmount, item} : {
    questionAmount: Number,
    item: string
}) {
    const [reply, setReply] = useState("")
    const [input, setInput] = useState("")
    const [index, setIndex] = useState(0)
    const [errorOne, setErrorOne] = useState(false)
    const [errorTwo, setErrorTwo] = useState(false)

    const handleSubmit = async (formData: FormData) => {
        const validate = await fetch('/api/bard/validate', {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text: formData.get("question")
            })
        })

        const data = await validate.json()

        if (data.answer.startsWith("Yes")) {
        } else {
            setErrorOne(true)
            return
        }

        const res = await fetch('/api/bard/answer', {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                subject: item,
                text: formData.get("question")
            })
        })

        const { answer } = await res.json()

        if ( answer.startsWith("Yes")) {
            setReply("Yes")
            return
        }

        if (answer.startsWith("No")) {
            setReply("No")
            return
        }

        setErrorTwo(true)
    }

    const nextQuestion = () => {
        setInput("")
        setReply("")
        setIndex(index+1)
    }

    const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
        if (errorOne)
            setErrorOne(false)
        if (errorTwo)
            setErrorTwo(false)
    }

    return (
        <div className="flex flex-col">
            <p>{index+1}</p>
            {reply == ""

                ?
                <div>
                    <form action={handleSubmit} autoComplete="false">
                        <div>
                            <p>Ask a yes or no question</p>
                            <input
                                className="text-black"
                                autoFocus={true}
                                value={input}
                                onChange={inputChange}
                                autoComplete="false"
                                name="question"
                                id="question"
                            />
                        </div>
                        <div>
                            <button type="submit">
                                Submit!
                            </button>
                        </div>
                        {
                            errorOne && (
                                <div>
                                    <p>Please ask a yes or no question</p>
                                </div>
                            )
                        }
                        {
                            errorTwo && (
                                <div>
                                    <p>The answer may be ambiguous. Try another question!</p>
                                </div>
                            )
                        }
                    </form>
                </div>
            
                :
                <div className="flex flex-col">
                    <p>Question: {input}</p>
                    <p>Answer: {reply}</p>
                    <button onClick={nextQuestion}>
                        Next Question
                    </button>
                </div>
            }
        </div>
    )
}