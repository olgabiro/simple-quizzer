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

  nextQuestion() {
    if (!this.isQuizFinished()) {
      this.currentQuestionIndex++;
    }

  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  isQuizFinished(): boolean {
    return this.currentQuestionIndex == this.quiz.questions.length
  }

  resetQuiz() {
    this.currentQuestionIndex = 0;
    this.quiz.score = 0;
  }
}
