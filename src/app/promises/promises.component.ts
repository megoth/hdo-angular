import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { PromisesApiService } from './promises-api/promises-api.service';
import { PromiseList } from './promise-list/promise-list.component';
import { PromiseListModel, createFromPromisesResponse } from './promise-list/promise-list.model';

@Component({
  selector: 'promises',
  providers: [PromisesApiService],
  directives: [PromiseList],
  template: require('./promises.component.html')
})
export class Promises {
  public promiseListModel: PromiseListModel;

  constructor(private promisesService: PromisesApiService) {}

  ngOnInit() {
    return this.promisesService.getPromises()
      .toPromise()
      .then(response => {
        this.promiseListModel = createFromPromisesResponse(response);
      });
  }
}
