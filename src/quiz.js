"use strict";
var AnswerCode;
(function (AnswerCode) {
    AnswerCode[AnswerCode["A"] = 0] = "A";
    AnswerCode[AnswerCode["B"] = 1] = "B";
    AnswerCode[AnswerCode["C"] = 2] = "C";
    AnswerCode[AnswerCode["D"] = 3] = "D";
})(AnswerCode || (AnswerCode = {}));
class Answer {
    constructor(code, description) {
        this.code = code;
        this.description = description;
    }
}
class Question {
    constructor(description, correctAnswerCode, answers) {
        this.description = description;
        this.correctAnswerCode = correctAnswerCode;
        this.answers = answers;
    }
    isCorrectAnswer(code) {
        return code === this.correctAnswerCode;
    }
}
class Quiz {
    constructor() {
        this.questions = [];
        this.score = 0;
    }
    clear() {
        this.score = 0;
        this.questions = [];
    }
    incrementScore() {
        this.score++;
    }
}
let quiz = new Quiz();
quiz.questions.push(new Question("First questioneee", AnswerCode.A, [
    new Answer(AnswerCode.A, "blabla"),
    new Answer(AnswerCode.B, "bla"),
    new Answer(AnswerCode.C, "blablaBla"),
    new Answer(AnswerCode.D, "blaBlabla")
]));
let currentQuestionIndex = 0;
function addQuestion(question) {
    quiz.questions.push(question);
}
function clearQuiz() {
    quiz.clear();
}
function nextQuestion() {
    if (currentQuestionIndex < quiz.questions.length - 1) {
        currentQuestionIndex++;
        fillQuestion();
        return true;
    }
    return false;
}
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        fillQuestion();
        return true;
    }
    return false;
}
function fillQuestion() {
    console.log("filling out questions!");
    let question = quiz.questions[currentQuestionIndex];
    console.log(question);
    document.getElementById("question-text").innerText = question.description;
    document.getElementById("answer-a-text").textContent = question.answers[0].description;
    document.getElementById("answer-b-text").textContent = question.answers[1].description;
    document.getElementById("answer-c-text").textContent = question.answers[2].description;
    document.getElementById("answer-d-text").textContent = question.answers[3].description;
}
function answerQuestion(answerCode) {
    if (quiz.questions[currentQuestionIndex].isCorrectAnswer(answerCode)) {
        quiz.incrementScore();
    }
    nextQuestion();
}
function saveQuiz() {
    quiz.clear();
    Array.from(document.getElementsByClassName("question")).map(it => createQuestion(it)).forEach(addQuestion);
    window.location.href = "./quiz.html";
    fillQuestion();
}
function getInputValue(inputElement) {
    return inputElement.value;
}
function createQuestion(question) {
    let description = getInputValue(question.getElementsByClassName("question-text")
        .item(0));
    let answerTexts = Array.from(question.getElementsByClassName("answer-text"))
        .map(answer => getInputValue(answer));
    let answers = [new Answer(AnswerCode.A, answerTexts[0]),
        new Answer(AnswerCode.B, answerTexts[1]),
        new Answer(AnswerCode.C, answerTexts[2]),
        new Answer(AnswerCode.D, answerTexts[3])];
    return new Question(description, findCorrectAnswer(question), answers);
}
function findCorrectAnswer(question) {
    let checkedName = Array.from(question.getElementsByTagName("input")).filter(it => it.type == "checkbox").filter(it => it.checked)[0];
    switch (checkedName.name) {
        case "correct-a":
            return AnswerCode.A;
        case "correct-b":
            return AnswerCode.B;
        case "correct-c":
            return AnswerCode.C;
        default:
            return AnswerCode.D;
    }
}
function displayNewQuestion() {
    let quiz = document.getElementById("questions");
    let template = document.getElementsByTagName("template")[0];
    let newQuestionIndex = quiz.childElementCount + 1;
    let question = template.content.cloneNode(true);
    quiz.append(question);
    quiz.children.item(quiz.childElementCount - 1).getElementsByTagName("span")[0].textContent = newQuestionIndex.toString();
}
