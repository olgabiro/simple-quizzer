import {Quiz} from "./quiz";
import {AnswerCode} from "./answer";
import {Question} from "./question";

let quiz: Quiz = new Quiz();
let currentQuestionIndex = 0

function addQuestion(question: Question) {
    quiz.questions.push(question);
}

function clearQuiz() {
    quiz.clear();
}

function nextQuestion(): boolean {
    if (currentQuestionIndex < quiz.questions.length - 1) {
        currentQuestionIndex++;
        return true;
    }
    return false;
}

function previousQuestion(): boolean {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        return true;
    }
    return false;
}

function answerQuestion(answerCode: AnswerCode) {
    console.log(`Answered with option ${answerCode.toString()}`)
    if (quiz.questions[currentQuestionIndex].isCorrectAnswer(answerCode)) {
        quiz.incrementScore();
    }
    nextQuestion();
}

