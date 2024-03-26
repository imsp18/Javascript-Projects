const questions = [
    {
        questions: "Which is the largest animal in the world?",
        answers: [
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
            { text: "Shark", correct: false }
        ]
    },
    {
        questions: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Africa", correct: false },
            { text: "Europe", correct: false }
        ]
    },
    {
        questions: "Which is the largest Desert in the world?",
        answers: [
            { text: "Sahara Desert", correct: true },
            { text: "Arabian Desert", correct: false },
            { text: "Kalahari Desert", correct: false },
            { text: "Gobi Desert", correct: false }
        ]
    },
    {
        questions: "Which is the largest planet in the solar system?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false }
        ]
    },
    {
        questions: "Which is the largest ocean in the world?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton =document.getElementById("answer-buttons");
const nextButton =document.getElementById("next-btn");

let currentQuestionIndex = 0; // to keep track of the current question
let score = 0; // to keep track of the score

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"; // change the text of the button to Next
    showQuestion(); //call the showQuestion function
}

function showQuestion(){
    let currentQuestionIndex = questions[currentQuestionIndex]; // get the current question
    let questionNo = currentQuestionIndex + 1; // get the question number 
    questionElement.innerHTML = questionNo + ". " + currentQuestionIndex.question; // display the question 

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button"); // create a button element 
        button.innerHTML = answers.text; // set the text of the button to the answer
        button.classList.add("btn"); // add a class to the button
        answerButton.appendChild(button); // append the button to the answerButton div
    });
}

startQuiz(); // call the startQuiz function
