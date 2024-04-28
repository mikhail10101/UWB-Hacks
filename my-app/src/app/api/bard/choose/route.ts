'use server'

const { DiscussServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");

const MODEL_NAME = "models/chat-bison-001"
const API_KEY = process.env.GOOGLE_APIKEY

const client = new DiscussServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

const check = process.env.GOOGLE_APIKEY;

const selectRandom = (arr: string[]) => {
    const i = Math.floor(Math.random() * arr.length)
    return arr[i]
}



export async function POST(req: Request) {
    let { text } = await req.json()
    
    var answer = ""
    if (text == "diseases") {
        answer = selectRandom(diseases)
    }
    else if (text == "animals") {
        answer = selectRandom(animals)
    }
    else if (text == "counties") {
        answer = selectRandom(countries)
    }

    console.log(answer)
    return Response.json({ answer })
}


const diseases : string[] = [
    "Hypertension",
    "Diabetes",
    "Obesity",
    "Asthma",
    "Arthritis",
    "Influenza",
    "Common Cold",
    "Chronic Obstructive Pulmonary Disease (COPD)",
    "Coronary Artery Disease",
    "Depression",
    "Anxiety Disorders",
    "Migraine",
    "Alzheimer's Disease",
    "Parkinson's Disease",
    "Osteoporosis",
    "Hepatitis",
    "Chronic Kidney Disease",
    "Peptic Ulcer Disease",
    "Cancer",
    "HIV/AIDS",
    "Schizophrenia",
    "Bipolar Disorder",
    "Epilepsy",
    "Hyperthyroidism",
    "Hypothyroidism",
    "Cirrhosis",
    "Gout",
    "Rheumatoid Arthritis",
    "Psoriasis",
    "Systemic Lupus Erythematosus (SLE)",
    "Eczema",
    "Crohn's Disease",
    "Ulcerative Colitis",
    "Meningitis",
    "Tuberculosis (TB)",
    "Pneumonia",
    "Bronchitis",
    "Gastroesophageal Reflux Disease (GERD)",
    "Gastritis",
    "Urinary Tract Infection (UTI)",
    "Chlamydia",
    "Gonorrhea",
    "Syphilis",
    "Herpes",
    "Human Papillomavirus (HPV) Infection",
    "Chronic Fatigue Syndrome",
    "Fibromyalgia",
    "Sleep Apnea",
    "Chronic Bronchitis",
    "Diverticulitis"
]

const animals : string[] = [
    "Dog",
    "Cat",
    "Horse",
    "Cow",
    "Pig",
    "Chicken",
    "Sheep",
    "Goat",
    "Rabbit",
    "Duck",
    "Turkey",
    "Fish",
    "Hamster",
    "Guinea Pig",
    "Turtle",
    "Parrot",
    "Frog",
    "Lizard",
    "Snake",
    "Elephant",
    "Lion",
    "Tiger",
    "Bear",
    "Giraffe",
    "Monkey",
    "Kangaroo",
    "Koala",
    "Panda",
    "Penguin",
    "Seal",
    "Dolphin",
    "Whale",
    "Shark",
    "Octopus",
    "Crab",
    "Lobster",
    "Squirrel",
    "Chipmunk",
    "Fox",
    "Deer",
    "Wolf",
    "Raccoon",
    "Owl",
    "Eagle",
    "Hawk",
    "Crow",
    "Swan",
    "Gorilla",
    "Zebra"
]

const countries : string[] = [
    "Sri Lanka",
    "Belize",
    "Nepal",
    "Lithuania",
    "Uruguay",
    "Ethiopia",
    "Malaysia",
    "Lesotho",
    "Madagascar",
    "Cambodia",
    "Netherlands",
    "Bulgaria",
    "Malawi",
    "Philippines",
    "Brazil",
    "Argentina",
    "Greece",
    "Qatar",
    "Jordan",
    "China",
    "Hungary",
    "Portugal",
    "Singapore",
    "Switzerland",
    "Guinea",
    "Chile",
    "India",
    "Oman",
    "Indonesia",
    "Denmark",
    "Rwanda",
    "Croatia",
    "Botswana",
    "Vietnam",
    "Ecuador",
    "Romania",
    "Yemen",
    "Mozambique",
    "Mongolia",
    "United States",
    "Lebanon",
    "Zimbabwe",
    "Ireland",
    "Libya",
    "Tajikistan",
    "Mali",
    "Costa Rica",
    "Turkey",
    "Finland"
]
