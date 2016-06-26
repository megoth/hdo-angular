import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HdoApiService } from '../../shared/hdo-api/hdo-api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PromisesApiService {
  constructor(private http: Http, private api: HdoApiService) {
    this.api.configure('https://www.holderdeord.no/promises.json');
  }

  getPromises() : Observable<any> {
    return this.api.fetch();
  }
}