import {Injectable} from '@angular/core';

const svrURL = 'https://wbdv-generic-server.herokuapp.com/api/001357876/courses';

@Injectable()
export class ModuleServiceClient {
  findModulesForCourse = (cid) =>
      fetch(`${svrURL}/${cid}/modules`)
          .then(response => response.json())
}
