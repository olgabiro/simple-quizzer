enum AnswerCode {
    A,
    B,
    C,
    D
}

class Answer {
    code: AnswerCode

    description: string


    constructor(code: AnswerCode, description: string) {
        this.code = code;
        this.description = description;
    }
}

class Question {
    description: string;
    private readonly correctAnswerCode: AnswerCode
    answers: Answer[]

    constructor(description: string, correctAnswerCode: AnswerCode, answers: Answer[]) {
        this.description = description;
        this.correctAnswerCode = correctAnswerCode;
        this.answers = answers;
    }

    isCorrectAnswer(code: AnswerCode): boolean {
        return code === this.correctAnswerCode
    }
}

class Quiz {
    questions: Question[] = []
    score: number = 0

    clear() {
        this.score = 0;
        this.questions = [];
    }

    incrementScore() {
        this.score++;
    }
}

let quiz: Quiz = new Quiz();
quiz.questions.push(new Question("First question", AnswerCode.A, []))
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
    console.log(quiz)
    console.log(quiz.questions)
    if (quiz.questions[currentQuestionIndex].isCorrectAnswer(answerCode)) {
        quiz.incrementScore();
    }
    nextQuestion();
}