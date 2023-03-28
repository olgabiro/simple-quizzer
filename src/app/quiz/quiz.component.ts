import {Component} from '@angular/core';
import {Quiz} from "./quiz";
import {QUIZ} from "../mock-quiz";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {

  quiz: Quiz = QUIZ
  currentQuestionIndex = 0

  answerQuestion(isCorrect: boolean) {
    if (isCorrect) {
      this.quiz.incrementScore()
    }
    this.nextQuestion();
  }

  nextQuestion(): boolean {
    if (this.currentQuestionIndex < this.quiz.questions.length - 1) {
      this.currentQuestionIndex++;
      return true;
    }
    return false;
  }

  previousQuestion(): boolean {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      return true;
    }
    return false;
  }

}
