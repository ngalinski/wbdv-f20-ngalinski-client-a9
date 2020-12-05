// TODO: change server URL to node

import {Injectable} from '@angular/core';

const svrURL = 'https://wbdv-f20-ngalinski-server-a9.herokuapp.com/api/quizzes';

@Injectable()
export class QuizzesServiceClient {
  findAllQuizzes = () =>
    fetch('http://localhost:8080/api/quizzes')
      .then(response => response.json())
  findQuizById = (qid) =>
    fetch(`http://localhost:8080/api/quizzes/${qid}`)
      .then(response => response.json())
  findAttemptsForQuiz = (qid) =>
      fetch(`http://localhost:8080/api/quizzes/${qid}/attempts`)
          .then(response => response.json())
}
