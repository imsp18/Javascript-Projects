const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
            { text: "Shark", correct: false }
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Africa", correct: false },
            { text: "Europe", correct: false }
        ]
    },
    {
        question: "Which is the largest Desert in the world?",
        answers: [
            { text: "Sahara Desert", correct: true },
            { text: "Arabian Desert", correct: false },
            { text: "Kalahari Desert", correct: false },
            { text: "Gobi Desert", correct: false }
        ]
    },
    {
        question: "Which is the largest planet in the solar system?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "Which is the largest ocean in the world?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0; // to keep track of the current question
let score = 0; // to keep track of the score

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"; // change the text of the button to Next
    showQuestion(); // call the showQuestion function
}

function showQuestion(){
    const currentQuestion = questions[currentQuestionIndex]; // get the current question
    questionElement.innerHTML = currentQuestion.question; // display the question 

    // Clear previous answer buttons
    answerButton.innerHTML = '';

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button"); // create a button element 
        button.innerHTML = answer.text; // set the text of the button to the answer
        button.classList.add("btn"); // add a class to the button
        button.addEventListener('click', () => {
            if(answer.correct) {
                score++;
            }
            nextQuestion();
        });
        answerButton.appendChild(button); // append the button to the answerButton div
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else if(score == 5){
        alert('Quiz Finished! Your score is: ' + score + ' You got all the answers correct!');
    }
    else {
        // Quiz finished, display score or any other action
        alert('Quiz Finished! Your score is: ' + score);
        // You can reset quiz or do other actions here
    }
}

startQuiz(); // call the startQuiz function
