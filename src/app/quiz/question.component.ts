import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Question} from "./question";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuestionComponent {

  @Input() question?: Question
  @Output() correctAnswer = new EventEmitter<boolean>();

}
