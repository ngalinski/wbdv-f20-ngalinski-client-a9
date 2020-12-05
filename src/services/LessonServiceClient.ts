import {Injectable} from '@angular/core';

const svrURL = 'https://wbdv-generic-server.herokuapp.com/api/001357876/modules';

@Injectable()
export class LessonServiceClient {
  findLessonsForModule = (mid) =>
      fetch(`${svrURL}/${mid}/lessons`)
          .then(response => response.json())
}
