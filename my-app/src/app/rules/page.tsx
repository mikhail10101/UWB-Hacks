
export default function main() {
    return (
        <div className="h-screen w-screen flex flex-col bg-[#EEE2DC] items-center">
            <div className="mt-20 text-[#123C69] font-black text-2xl items-center justify-center">
                RULES
            </div>
            <div className="rounded-3xl mt-16 p-10 flex flex-col items-center justify-center w-[30rem] h-[35rem] text gap-y-5 bg-[#ce6a6b]">
                <p className="">
                    <b>Limited Guesses</b> | The guesser is usually allowed a set number of guesses or questions to identify the word or phrase.
                </p>
                <p>
                    <b>Clarity in Questions</b> | The guesser must ask clear and concise questions to gather relevant information from the clue-giver.
                </p>
                <p>
                    <b>Strategic Guessing</b> | The guesser should strategically use their guesses, focusing on obtaining information that will lead them closer to the correct answer.
                </p>
                <p>
                    <b>Active Listening</b> | It's essential for the guesser to actively listen to the responses given by the clue-giver to formulate better guesses.
                </p>
                <p>
                    <b>Avoiding Redundancy</b> | The guesser should avoid asking redundant questions that do not provide new information or narrow down the possibilities.
                </p>
            </div>           
        </div>
    )
}