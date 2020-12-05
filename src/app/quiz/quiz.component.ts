import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionsServiceClient} from '../../services/question.service.client';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private questionsServiceClient: QuestionsServiceClient,
              private route: ActivatedRoute) {
  }

  quizId = '';
  questions = [];

  submitQuiz = () => {
    fetch(`http://localhost:8080/api/quizzes/${this.quizId}/attempts`, {
      method: 'POST',
      body: JSON.stringify(this.questions),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
        .then(result => console.log('Submitted Result: ', result));
  }


  ngOnInit(): void {
    this.route.params.subscribe(ps => {
      this.quizId = ps.quizId;
      this.questionsServiceClient.findQuestionsForQuiz(this.quizId)
          .then(qs => this.questions = qs);
    });
    console.log('QuizId: ', this.quizId);
  }
}
