"use client"

import { ChangeEvent, useState } from "react"
import { useFormStatus } from "react-dom"

export default function QuestionBlock({questionAmount, item, wrapperFunc, wrapperReset} : {
    questionAmount: number,
    item: string,
    wrapperFunc: () => void,
    wrapperReset: () => void
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
        wrapperReset()
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
                                <p className="mb-5 text-3xl font-black text-[#123C69]">
                                    Type in your guess!
                                </p>
                                <input
                                    className="text-black m-3 py-2 font-medium text-3xl w-[40rem] rounded-2xl px-3 py-1 outline-none text-center bg-[#ede0da]"
                                    autoFocus={true}
                                    value={guess}
                                    onChange={guessChange}
                                    name="guess"
                                    id="guess"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <button type="submit" className="mt-5 bg-[#ce6a6b] font-black px-8 py-2 text-lg rounded-lg hover:opacity-75">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>)
                }
                {
                    //You were right
                    done == 1 &&
                    (<div className="flex flex-col items-center justify-center">
                        <p className = "mb-2.5 text-3xl ring-2 ring-[white] rounded-lg px-1">Nice job!</p>
                        <p className = "mb-2.5 text-3xl ring-2 ring-[white] rounded-lg px-1">Your guess: {guess}</p> 
                        <p className = "mb-2.5 text-3xl ring-2 ring-[white] rounded-lg px-1">Answer: {item}</p>
                    </div>)
                }
                {
                    //You were wrong
                    done == 2 && 
                    (<div>
                        <p className = "mb-2.5 text-3xl ring-2 ring-[white] rounded-lg px-1">Nice try! Better luck next time</p>
                        <p className = "mb-2.5 text-3xl ring-2 ring-[white] rounded-lg px-1">Your guess: {guess}</p> 
                        <p className = "mb-5 text-3xl ring-2 ring-[white] rounded-lg px-1">Answer: {item}</p>
                    </div>)
                }
                {
                    //Try again button
                    (done == 1 || done == 2) &&
                    (<div>
                        <button onClick={reset} className="mt-2 bg-[#ce6a6b] px-8 py-2 text-lg rounded-lg hover:opacity-75">
                            Try again?
                        </button>
                    </div>)
                }

            </div>
        )
    }

    return (
            <div className="w-screen h-screen flex flex-col bg-[#EDC7B7] items-center justify-center">
                <img src="/hanni.png" alt="Logo" className="w-[15rem] h-auto mb-2 rounded-3xl"></img>
                <p className="mb-5 font-black text-[#AC3B61] text-xl">
                    Question {index+1}
                </p>
                {reply == ""

                    ?
                    <div className="w-full items-center">
                        <form action={handleSubmit} className="flex flex-col items-center">
                            <div className="flex flex-col items-center w-full items-center">
                                <p className = "text font-bold text-[#123C69]">
                                    Ask a yes or no question about the subject!
                                </p>
                                <p className="text-xs font-black text-[#AC3B61]">
                                </p>
                                <input  
                                    className="text-black m-3 py-2 font-medium text-3xl w-64 w-[50%] rounded-2xl px-3 py-1 outline-none text-center bg-[#ede0da] placeholder:text-sm"
                                    autoFocus={true}
                                    value={input}
                                    onChange={inputChange}
                                    name="question"
                                    id="question"
                                    placeholder="Ex. is it alive?"
                                />
                            </div>
                            <div>
                                <InputSubmitButton/>
                            </div>
                            {
                                errorOne ? (
                                    <div className="mt-1 text-xs h-[0.5rem] font-black">
                                        <p>*Please ask a yes or no question</p>
                                    </div>
                                ) : (
                                    <div className="mt-1 h-[0.5rem]">
                                        <p></p>
                                    </div>
                                )   
                            }
                            {
                                errorTwo ? (
                                    <div className="mt-1 text-xs h-[0.5rem] font-black">
                                        <p>*The answer may be ambiguous. Try another question!</p>
                                    </div>
                                ) : (
                                    <div className="mt-1 h-[0.5rem]">
                                        <p></p>
                                    </div>
                                )   
                            }
                        </form>
                    </div>
                
                    :
                    <div className="w-full items-center flex flex-col">
                        <p className = "text-2xl rounded-lg px-1 font-bold text-[#123C69]">
                            {input}
                        </p>
                        <p className = "text-3xl rounded-lg px-1 font-black text-[#AC3B61]">
                            {reply}
                        </p>
                        <div className="flex flex-row mt-5 items-center justify-center gap-3 font-black">
                            <button onClick={nextQuestion} className="w-[11rem] bg-[#ce6a6b] px-8 py-2 text-lg rounded-lg hover:opacity-75">
                                Next
                            </button>
                            <p className="font-black">
                                OR
                            </p>
                            <button onClick={guessNow} className="w-[11rem] bg-[#ce6a6b] px-8 py-2 text-lg rounded-lg hover:opacity-75">
                                Guess now
                            </button>
                        </div>
                    </div>
                }
            </div>
    )
} 

export function InputSubmitButton() {
    const { pending } = useFormStatus()

    return (
        <div className="flex flex-col mt-5">
            
            {
                pending ? (
                    <div className="h-[2.5rem] flex items-center justify-center">
                        <Spinner/>
                    </div>
                ) :
                (
                    <button type="submit" disabled={pending} className="h-[2.5rem] flex items-center justify-center bg-[#ce6a6b] font-black px-8 text-lg rounded-lg hover:opacity-75">
                        <p>Submit</p>
                    </button>
                )
            }
        </div>
        
    )
}

export function Spinner() {
    return (
    <div role="status">
        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-white fill-[#ce6a6b]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div>
    )
}