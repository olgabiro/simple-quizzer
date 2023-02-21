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