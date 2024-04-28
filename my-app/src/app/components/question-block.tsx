"use client"

import { ChangeEvent, useState } from "react"

export default function QuestionBlock({questionAmount, item, wrapperFunc} : {
    questionAmount: number,
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

    const guessNow = () => {
        localStorage.setItem(`q${index}`,input)
        localStorage.setItem(`a${index}`,reply)
        wrapperFunc()
        setInput("")
        setReply("")
        setIndex(questionAmount)
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
            <div className="w-screen h-screen flex flex-col bg-[#EDC7B7] items-center justify-center">
                {
                    //Guess the word panel
                    done == 0 &&
                    (<div className="flex flex-col items-center justify-center">
                        <form action={handleGuess}>
                            <div className="flex flex-col items-center justify-center">
                                <p className="mb-5 text-3xl">Type in your guess!</p>
                                <input
                                    className="text-black"
                                    autoFocus={true}
                                    value={guess}
                                    onChange={guessChange}
                                    name="guess"
                                    id="guess"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
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
            <div className="w-screen h-screen flex flex-col bg-[#EDC7B7] items-center justify-center">
                <img src="/hanni.png" alt="Logo" className="w-[15rem] h-auto mb-2 rounded-2xl"></img>
                <p className="mb-5 text-3xl">Question {index+1}</p>
                {reply == ""

                    ?
                    <div className="w-full h-[25%] items-center">
                        <form action={handleSubmit} className="flex flex-col items-center">
                            <div className="flex flex-col items-center w-full items-center">
                                <p className = "mb-6 text-3xl ring-2 ring-[white] rounded-lg px-1">Ask a yes or no question</p>
                                <input
                                    className="text-black text-5xl w-64 w-[75%] rounded-2xl px-3 py-1 outline-none text-center"
                                    autoFocus={true}
                                    value={input}
                                    onChange={inputChange}
                                    name="question"
                                    id="question"
                                />
                            </div>
                            <div>
                                <button type="submit" className="mt-5 bg-[#ce6a6b] px-8 py-2 text-lg rounded-lg">
                                    Submit!
                                </button>
                            </div>
                            {
                                errorOne && (
                                    <div className="text-lg mt-3">
                                        <p>Please ask a yes or no question</p>
                                    </div>
                                )
                            }
                            {
                                errorTwo && (
                                    <div className="text-lg mt-3">
                                        <p>The answer may be ambiguous. Try another question!</p>
                                    </div>
                                )
                            }
                        </form>
                    </div>
                
                    :
                    <div className="flex flex-col">
                        <p className = "mb-2.5 text-3xl ring-2 ring-[white] rounded-lg px-1">Question: {input}</p>
                        <p className = "mb-6 text-3xl ring-2 ring-[white] rounded-lg px-1">Answer: {reply}</p>
                        <button onClick={nextQuestion} className="mt-5 bg-[#ce6a6b] px-8 py-2 text-lg rounded-lg">
                            Next
                        </button>
                        <button onClick={guessNow}>
                            Guess now!
                        </button>
                    </div>
                }
            </div>
    )
} 