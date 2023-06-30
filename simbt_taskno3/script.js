const questions = [
    {
        
        question: "What is the full form of HTML ?",
        answers: [
            {text: "Home Tool Markup Language", correct: false},
            {text: "Hyper Text Markup Language", correct: true},
            {text: "Hyperlink text and Markup Language", correct: false},
            {text: "Hyper Text Marked language", correct: false},
        ]
    },
    {
        question: "Who is making the Web standards ?",
        answers: [
            {text: "Google", correct: false},
            {text: "the World Wide Web Consortium (W3C)", correct: true},
            {text: "Microsoft", correct: false},
            {text: "Mozilla", correct: false},
        ]
    },
    {
        question: "What is the full form of CSS ?",
        answers: [
            {text: "Cascading Style Sheets", correct: true},
            {text: "Colorured Special Sheets", correct: false},
            {text: "Color and style sheets", correct: false},
            {text: "Console style sheets", correct: false},
        ]
    },
    {
        question: "In how many Css can be writter ?",
        answers: [
            {text: "2", correct: false},
            {text: "4", correct: false},
            {text: "3", correct: true},
            {text: "5", correct: false},
        ]
    },
    {
        question: "what is the full  form XML ?",
        answers: [
            {text: "Example markup language", correct: false},
            {text: "X markup language", correct: false},
            {text: "Extra modern link", correct: false},
            {text: "Extensible markup language", correct: true},
        ]
    }
];
/*here we have made a variable  */
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0; 
let score=0; 

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion(); 

}

function showQuestion(){

    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;
    questionElement.innerHTML= questionNo + ". "+ currentQuestion.
    question;
   

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn"); 
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    });
    nextButton.style.display ="block";
}


function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();
