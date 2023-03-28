export interface Answer {
  description: string
  correct: boolean
}

export class Question {
  description: string;
  answers: Answer[]

  constructor(description: string, answers: Answer[]) {
    this.description = description;
    this.answers = answers;
  }
}
