import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

@Injectable()
export class HdoApiService {
  private baseUrl: string;

  constructor(private http: Http) {}

  configure(url: string) {
    this.baseUrl = url;
  }

  fetch() : Observable<any> {
    return this.http.get(this.baseUrl)
      .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
}