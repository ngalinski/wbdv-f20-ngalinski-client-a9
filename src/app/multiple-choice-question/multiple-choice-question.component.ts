import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  @Input()
  question = {_id: '', title: '', question: '', choices: [], correct: '', answer: ''};
  grading = false;
  isRightAnswer;
  faCheck = faCheck;
  faTimes = faTimes;

  @Input()
  answer = '';

  @Output()
  answerChange = new EventEmitter<string>();
  submitAnswer = () => {
    this.answerChange.emit(this.answer);
    this.grade();
  }


  @Output()
  grade = () => {
    this.grading = true;
    this.isRightAnswer = (this.answer === this.question.correct);
    console.log('this.answer: ', this.answer);
    console.log('this.question.correct: ', this.question.correct);
    console.log('Grading Status: ', this.grading);
    console.log('answerChange: ', this.answerChange);

  }

  constructor() { }

  ngOnInit(): void {
    console.log('M/C Component');
    console.log('answer: ', this.answer);
  }

}
