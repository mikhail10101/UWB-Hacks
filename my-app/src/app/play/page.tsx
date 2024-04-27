import Link from "next/link"
import QuestionBlock from "../components/question-block"

export default function PlayPage() {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <QuestionBlock questionAmount={2} item="Taylor Swift"/>
        </div>
    )
}