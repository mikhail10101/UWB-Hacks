'use server'

const { DiscussServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");

const MODEL_NAME = "models/chat-bison-001"
const API_KEY = process.env.GOOGLE_APIKEY

const client = new DiscussServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

const check = process.env.GOOGLE_APIKEY;

export async function POST(req: Request) {
    const { subject, text } = await req.json()

    const result = await client.generateMessage({
        model: MODEL_NAME, // Required. The model to use to generate the result.
        temperature: 0.0, // Optional. Value `0.0` always uses the highest-probability result.
        candidateCount: 1, // Optional. The number of candidate results to generate.
        prompt: {
        // optional, preamble context to prime responses
        context: "Start your answer with a yes or no",
        // Optional. Examples for further fine-tuning of responses.
        
        examples: [
            {
                input: { content: "Are water and H20 synonymous?" },
                output: {
                    content:
                        `Yes`,
                },
            },
            {
                input: { content: "Are dog and cat synonymous?" },
                output: {
                    content:
                        `No`,
                },
            },
        ],
        
        // Required. Alternating prompt/response messages.
        messages: [{ content: `Start the answer with a yes or no. ${subject} is the corrent answer. My answer is ${text}. Am I correct?` }],
        },
    });
    
    const answer = result[0].candidates[0].content
    console.log(answer)
    return Response.json({ answer })
}
