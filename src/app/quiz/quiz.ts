import {Question} from "./question";

export class Quiz {
  questions: Question[] = []
  score: number = 0

  constructor(questions: Question[]) {
    this.questions = questions;
  }

  clear() {
    this.score = 0;
    this.questions = [];
  }

  incrementScore() {
    this.score++;
  }
}
