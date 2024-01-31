let score = 0;
let questionCount = 0;
let currentQuestion;

function startGame() {
    score = 0;
    questionCount = 0;
    displayQuestion();
    document.getElementById("resultMessageDisplay").innerText = "";
    document.getElementById("score").innerText = "Score: 0";
}

function displayQuestion() { //generates a random number between 1 and 11
    const num1 = Math.floor(Math.random() * 15) + 1; 
    const num2 = Math.floor(Math.random() * 15) + 1;
    currentQuestion = { num1, num2, answer: num1 * num2 };//creates an object named currentQuestion with three properties: num1, num2, and answer. It stores the two randomly generated numbers and the correct answer to the multiplication question.

    document.getElementById("question-container").innerText = `${num1} * ${num2} = `;// sets the innerText of the HTML element with the ID "question-container" to display the current multiplication question
}

function checkAnswer() {//This checks if the user's input is a valid number. 
    const userAnswer = parseInt(document.getElementById("answer-input").value);//retrieves the user's input from the HTML input field

    if (!isNaN(userAnswer)) {
        if (userAnswer === currentQuestion.answer) {
            score++;//increments score if correct
            document.getElementById("resultMessageDisplay").innerText = "Correct!";
        } else {
            document.getElementById("resultMessageDisplay").innerText = "Incorrect!";
        }

        questionCount++;

        if (questionCount < 20) { //checks if it has reached the numbe of quations. diplays the question and end game if reached
            displayQuestion();
        } else {
            endGame();
        } 

        document.getElementById("answer-input").value = "";//This line clears the input field after processing the user's answer.
        document.getElementById("score").innerText = `Score: ${score}`;
    } else {//not valid input number. So displays error message.
        document.getElementById("resultMessageDisplay").innerText = "Please enter a valid number.";
    }
}

function endGame() {
    document.getElementById("question-container").innerText = "Game Over!";
    document.getElementById("resultMessageDisplay").innerText = `You scored : ${score} out of 20.`;
}
