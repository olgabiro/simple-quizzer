class Answer {
    code: AnswerCode

    description: string


    constructor(code: AnswerCode, description: string) {
        this.code = code;
        this.description = description;
    }
}

enum AnswerCode {
    A,
    B,
    C,
    D
}