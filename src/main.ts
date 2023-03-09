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

function saveQuiz() {
    quiz.clear()
    Array.from(document.getElementsByClassName("question")).map(it => createQuestion(it)).forEach(addQuestion);
    window.location.href = "./quiz.html"
}

function getInputValue(inputElement: Element) {
    return (inputElement as HTMLInputElement).value!;
}

function createQuestion(question: Element): Question {
    console.log(question)
    let description = getInputValue(question.getElementsByClassName("question-text")
        .item(0)!);
    let answerTexts = Array.from(question.getElementsByClassName("answer-text"))
        .map(answer => getInputValue(answer))
    console.log(answerTexts)
    let answers = [new Answer(AnswerCode.A, answerTexts[0]),
        new Answer(AnswerCode.B, answerTexts[1]),
        new Answer(AnswerCode.C, answerTexts[2]),
        new Answer(AnswerCode.D, answerTexts[3])]

    return new Question(description, findCorrectAnswer(question), answers);
}

function findCorrectAnswer(question: Element): AnswerCode {
    let checkedName = Array.from(question.getElementsByTagName("input")).filter(it => it.type == "checkbox").filter(it => it.checked)[0]

    switch (checkedName.name) {
        case "correct-a":
            return AnswerCode.A;
        case "correct-b":
            return AnswerCode.B
        case "correct-c":
            return AnswerCode.C
        default:
            return AnswerCode.D;
    }
}

function displayNewQuestion() {
    let quiz = document.getElementById("questions")!;
    let template = document.getElementsByTagName("template")[0];
    let newQuestionIndex = quiz.childElementCount + 1
    console.log(newQuestionIndex)
    let question = template.content.cloneNode(true);
    quiz.append(question)
    quiz.children.item(quiz.childElementCount - 1)!.getElementsByTagName("span")[0]!.textContent = newQuestionIndex.toString()
}