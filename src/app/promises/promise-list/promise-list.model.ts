import { PromiseModel } from '../promise/promise.model';
import { PromisesApiResponse } from '../promises-api/promises-api.response';

export class PromiseListModel {
  constructor(private promises: PromiseModel[]) {}
}

export function createFromPromisesResponse(response: PromisesApiResponse) : PromiseListModel {
  var promises = response.results.map(promise => new PromiseModel(parseInt(promise.id, 10), promise.body));
  return new PromiseListModel(promises);
}