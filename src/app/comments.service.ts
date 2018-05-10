import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

@Injectable()
export class CommentsService {
  url = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.url).pipe(pluck('body'));
  }

}
