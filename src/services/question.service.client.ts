// TODO: change server URL to node

const svrURL = 'https://wbdv-f20-ngalinski-server-a9.herokuapp.com/api/quizzes';

import {Injectable} from '@angular/core';
@Injectable()
export class QuestionsServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`http://localhost:8080/api/quizzes/${qid}/questions`)
      .then(response => response.json())
}
