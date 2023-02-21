import {Question} from "./question";

export class Quiz {
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