"use client"

import { ChangeEvent, useState } from "react"

export default function QuestionBlock({questionAmount, item, wrapperFunc} : {
    questionAmount: Number,
    item: string,
    wrapperFunc: () => void
}) {
    const [reply, setReply] = useState("")
    const [input, setInput] = useState("")
    const [index, setIndex] = useState(0)
    const [errorOne, setErrorOne] = useState(false)
    const [errorTwo, setErrorTwo] = useState(false)

    const [guess, setGuess] = useState("")
    const [errorThree, setErrorThree] = useState(false)

    const [done, setDone] = useState(0)

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

        if (data.answer.startsWith("Yes") || data.answer.startsWith(`The text "${formData.get("question")}" is a valid`)) {
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
        localStorage.setItem(`q${index}`,input)
        localStorage.setItem(`a${index}`,reply)
        wrapperFunc()
        setInput("")
        setReply("")
        setIndex(index+1)
    }

    const handleGuess = async (formData: FormData) => { 
        const guess = await fetch('/api/bard/guess', {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                subject: item,
                text: formData.get("guess")
            })
        })

        const { answer } = await guess.json()

        if ( answer.startsWith("Yes") ) {
            setDone(1)
        } else {
            setDone(2)
        }
    }

    const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
        if (errorOne)
            setErrorOne(false)
        if (errorTwo)
            setErrorTwo(false)
    }

    const guessChange = (e: ChangeEvent<HTMLInputElement>) => {
        setGuess(e.target.value)
        if(errorThree) {
            setErrorThree(false)
        }
    }

    const reset = () => {
        setReply("")
        setInput("")
        setIndex(0)
        setGuess("")
        setErrorThree(false)
        setDone(0)
    }

    if (index == questionAmount) {
        return (
            <div>
                {
                    //Guess the word panel
                    done == 0 &&
                    (<div>
                        <form action={handleGuess}>
                            <div>
                                <p>Type in your guess!</p>
                                <input
                                    className="text-black"
                                    autoFocus={true}
                                    value={guess}
                                    onChange={guessChange}
                                    name="guess"
                                    id="guess"
                                />
                            </div>
                            <div>
                                <button type="submit">
                                    Submit!
                                </button>
                            </div>
                        </form>
                    </div>)
                }
                {
                    //You were right
                    done == 1 &&
                    (<div className="flex flex-col">
                        <p>Nice job!</p>
                        <p>Your guess: {guess}</p> 
                        <p>Answer: {item}</p>
                    </div>)
                }
                {
                    //You were wrong
                    done == 2 && 
                    (<div>
                        <p>Nice try! Better luck next time</p>
                        <p>Your guess: {guess}</p> 
                        <p>Answer: {item}</p>
                    </div>)
                }
                {
                    //Try again button
                    (done == 1 || done == 2) &&
                    (<div>
                        <button onClick={reset}>
                            Try again?
                        </button>
                    </div>)
                }

            </div>
        )
    }

    return (
            <div className="flex flex-col">
                <p>{index+1}</p>
                {reply == ""

                    ?
                    <div>
                        <form action={handleSubmit}>
                            <div>
                                <p>Ask a yes or no question</p>
                                <input
                                    className="text-black"
                                    autoFocus={true}
                                    value={input}
                                    onChange={inputChange}
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
                            Next
                        </button>
                    </div>
                }
            </div>
    )
}